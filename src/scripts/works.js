import Vue from 'vue';

const vueModel = new Vue({
    el: '#works__widget',
    template: '#works__components',
    data() {
        return {
            works_data: require('./../data/works.json'),
        }
    },
    methods: {
        requareImage: function() {
            this.works_data.map(
                function(item) {
                    let requiredImg = require(`../images/content/${item.image}`);
                    item.image = requiredImg.default;
                }
            )
        }
    },
    created: function() {
        this.requareImage();
    }
});