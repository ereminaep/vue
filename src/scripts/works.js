import Vue from 'vue';

const vueModel = new Vue({
    el: '#works__widget',
    template: '#works__components',
    data() {
        return {
            works_data: require('./../data/works.json'),
            skills: require('./../data/skills.json'),
            tags: '',
            currentSlide: 4
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
            let result;
            this.skills.map(
                function(group) {
                    group.items.map(function(skill) {
                        if (skill.id == id) {
                            result = skill.name;
                        }
                    })
                })
            return result;
        },
        getSkills: function() {
            let getSkillById = this.getSkillById;
            let tags = [];
            let temp = 0;
            this.works_data.map(
                function(item) {
                    item.tags = [];
                    item.skills.map(function(value) {
                        item.tags.push(getSkillById(value));
                    })
                }
            );
        }
    },
    created: function() {
        this.requareImage();
        this.getSkills();
        console.log(this.works_data);
    }
});