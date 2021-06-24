import Vue from 'vue';
let reviews_data = require('./../data/reviews.json');

let reviews = Vue.component('reviews', {
    template: "<p>123123</p>",
    data: function() {
        return {
            groups: reviews_data
        }
    }
})


const vueModel = new Vue();

console.log(123123);

vueModel.$mount('#reviews__widget');