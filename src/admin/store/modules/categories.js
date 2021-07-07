import axios from 'axios';

const baseUrl = 'https://webdev-api.loftschool.com';
const token = localStorage.getItem('token') || "";

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const cetegories = {
    state: {
        categories: []
    },
    mutations: {
        removeCategorie(state, categoryId) {
            axios.delete(`/categories/${categoryId}`)
        }
    },
    getters: {
        getCategories() {
            let result = new Array();
            axios
                .get('/categories/')
                .then(
                    function(response) {
                        for (let i = 0; i < response.data.length; i++) {
                            result.push(response.data[i]);
                        }
                    }
                );
            return result;
        }
    }
}

export default cetegories;