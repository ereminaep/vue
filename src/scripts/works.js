import Vue from 'vue';

import { store } from '../admin/store';
import $axios from "../admin/requests";

store.$axios = $axios;

import { mapState } from 'vuex';
import { mapActions } from 'vuex';

const vueModel = new Vue({
    el: '#works__widget',
    store,
    template: '#works__components',
    computed: {
        ...mapState("works", {
            works: state => state.data
        })
    },
    created() {
        this.fetchWorksAction();
    },
    data() {
        return {
            currentSlide: 1
        }
    },
    methods: {
        ...mapActions({
            fetchWorksAction: "works/fetch",
        }),
        moveSlides(number) {
            if (number == 1) {
                if (this.currentSlide < this.works.length) {
                    ++this.currentSlide;
                }
            }
            if (number == -1) {
                if (this.currentSlide > 0) {
                    --this.currentSlide;
                }
            }
        },
        setCurrentSlide(number) {
            this.currentSlide = number;
        },
        getTags(string) {
            let tags = string.trim().split(',');
            if (tags[tags.length - 1] == '') {
                tags.splice(tags.length - 1, 1);
            }
            return tags;
        }
    }
});