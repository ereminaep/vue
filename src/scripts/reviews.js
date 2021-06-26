import Vue from 'vue';

const vueModel = new Vue({
    el: '#reviews__widget',
    template: '#reviews__components',
    data() {
        return {
            reviews_data: require('./../data/reviews.json')
        }
    },
    methods: {
        requareImage: function() {
            this.reviews_data.map(
                function(item) {
                    let requiredImg = require(`../images/content/${item.image}`);
                    item.image = requiredImg.default;
                }
            )
        }
    },
    created: function() {
        this.requareImage();
        console.log(this.reviews_data);
    }
});