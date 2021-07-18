import Vue from 'vue';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import { store } from '../admin/store';
import $axios from "../admin/requests";

store.$axios = $axios;

import { mapState } from 'vuex';
import { mapActions } from 'vuex';

const vueModel = new Vue({
    el: '#reviews__widget',
    template: '#reviews__components',
    store,
    components: { Swiper, SwiperSlide },
    computed: {
        ...mapState("reviews", {
            reviews: state => state.data
        })
    },
    data() {
        return {
            sliderOptions: {
                slidesPerView: 1,
                spaceBetween: 40,
                breakpoints: {
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 0
                    }
                },
            },
            allowNext: true,
            allowPrev: false
        }
    },
    methods: {
        ...mapActions({
            fetchReviewsAction: "reviews/fetch",
        }),
        slide(direction) {
            const slider = this.$refs["slider"].$swiper;
            if (direction == 'next') {
                slider.slideNext();
            }
            if (direction == 'prev') {
                slider.slidePrev();
            }
            this.allowNext = !slider.isEnd;
            this.allowPrev = !slider.isBeginning;
        }

    },
    created() {
        this.fetchReviewsAction();
    }
});