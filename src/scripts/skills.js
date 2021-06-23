import Vue from 'vue';
let skills_data = require('./../data/skills.json');

let skills = Vue.component('skills', {
    template: "<div><div class='skill__group' v-for='item in groups'><h3 class='skill__group__title'>{{ item.group }}</h3><skills-list v-bind:items='item.items'></skills-list></div></div>",
    data: function() {
        return {
            groups: skills_data
        }
    }
})

let skillsList = Vue.component('skillsList', {
    props: ['items'],
    template: "<div class='skills__list'><div class='skill' v-for='value in items'><skill :percent='value.percent' :name='value.name'></skill></div></div>",
    data: function() {
        return {}
    },
})

let skill = Vue.component('skill', {
    props: ['percent', 'name'],
    template: "<div><span class='skill__text'>{{ name }}</span><canvas @click='makeCicrce'></canvas></div>",
    data: function() {
        return {
            size: 132,
            lineWidth: 8,
            innerColor: 'hsla(0,0%,100%,.3)',
            outerColor: '#dc9322'
        }
    },
    methods: {
        makeCicrce(e) {
            let canvas = e.target;
            if (typeof(G_vmlCanvasManager) !== 'undefined') {
                G_vmlCanvasManager.initElement(canvas);
            }

            let ctx = canvas.getContext('2d');
            canvas.width = canvas.height = this.size;

            ctx.translate(this.size / 2, this.size / 2);

            let radius = (this.size - this.lineWidth) / 2;


            let drawCircle = function(color, lineWidth, percent) {
                percent = Math.min(Math.max(0, percent || 1), 1);
                ctx.beginPath();
                ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
                ctx.strokeStyle = color;
                ctx.lineWidth = lineWidth
                ctx.stroke();
            };

            drawCircle(this.innerColor, 1, 100 / 100);
            drawCircle(this.outerColor, this.lineWidth, this.percent / 100);
        }
    }
})

const vueModel = new Vue();

vueModel.$mount('#skills__widget');