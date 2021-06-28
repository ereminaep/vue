import Vue from 'vue';

const vueModel = new Vue({
    el: '#works__widget',
    template: '#works__components',
    data() {
        return {
            works_data: [],
            skills: require('./../data/skills.json'),
            tags: '',
            currentSlide: 1
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
        },
        getSkillById(id) {
            return this.skills[id].name;
        },
        getSkills: function() {
            let getSkillById = this.getSkillById;
            this.works_data.map(
                function(item) {
                    item.tags = [];
                    item.skills.map(function(value) {
                        item.tags.push(getSkillById(value));
                    })
                }
            );
        },
        moveSlides(number) {
            if (number == 1) {
                if (this.currentSlide < this.works_data.length) {
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
        }
    },
    created: function() {
        this.works_data = require('./../data/works.json');
        this.requareImage();
        console.log(this.getSkillById(1));
        this.getSkills();
    }
});