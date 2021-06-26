import Vue from 'vue';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

const vueModel = new Vue({
    el: '#reviews__widget',
    template: '#reviews__components',
    components: { Swiper, SwiperSlide },
    data() {
        return {
            reviews_data: require('./../data/reviews.json'),
            sliderOptions: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            breakpoints: {
                480: {
                    slidesPerView: 1,
                },
            },
            allowNext: true,
            allowPrev: false
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
        },
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
    created: function() {
        this.requareImage();
    }
});