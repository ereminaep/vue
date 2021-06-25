import Vue from 'vue';

let reviews = Vue.component('reviews', {
    props: ['items'],
    template: "#reviews-list"
})

let review = Vue.component('review', {
    props: ['text', 'name', 'work', 'image'],
    template: "#review",
    methods: {
        requareImage: function(img) {
            let requiredImg = require(`../images/content/${img}`);
            return requiredImg.default;
        }
    },
    mounted: function() {
        let beforeImg = this.$el.querySelector('img').getAttribute('data-src');
        let afterImg = this.requareImage(beforeImg);
        this.$el.querySelector('img').setAttribute('src', afterImg);
    }
})

const vueModel = new Vue({
    el: '#reviews__widget',
    template: '#reviews__components',
    data() {
        return {
            reviews_data: require('./../data/reviews.json')
        }
    }
});