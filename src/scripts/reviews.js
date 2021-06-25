import Vue from 'vue';

let reviews = Vue.component('reviews', {
    props: ['items'],
    template: "#reviews-list"
})

let review = Vue.component('review', {
    props: ['text', 'name', 'work', 'image'],
    template: "#review"
})

const vueModel = new Vue({
    el: '#reviews__widget',
    template: '#reviews__components',
    components: { reviews, review },
    data() {
        return {
            reviews_data: require('./../data/reviews.json')
        }
    },
    methods: {
        /*requareImagesToArray(data) {
            return data.map(item => {
                const requiredImage = requare(`../images/content/${item.image}`);
                item.image = requiredImage;
                return item
            })
        }*/
    },
    created() {
        //this.reviews_data = this.requareImagesToArray();
    }
});