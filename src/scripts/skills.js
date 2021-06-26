import Vue from 'vue';

let skills = Vue.component('skills', {
    groups: ['groups'],
    template: "#skills-groups",
    data: function() {
        return {
            groups: require('./../data/skills.json')
        }
    }
})

let skillsList = Vue.component('skillsList', {
    props: ['items'],
    template: "#skills-list"
})

let skill = Vue.component('skill', {
    props: ['percent', 'name'],
    template: "#skill",
    data: function() {
        return {
            size: 132,
            lineWidth: 8,
            innerColor: 'hsla(0,0%,100%,.3)',
            outerColor: '#dc9322'
        }
    },
    methods: {
        drawCircle: function(color, lineWidth, percent, ctx, radius) {
            let percent_new = Math.min(Math.max(0, percent || 1), 1);
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent_new, false);
            ctx.strokeStyle = color;
            ctx.lineWidth = lineWidth
            ctx.stroke();
        },
        makeCircle: function(canvas, percent) {
            if (typeof(G_vmlCanvasManager) !== 'undefined') {
                G_vmlCanvasManager.initElement(canvas);
            }
            let ctx = canvas.getContext('2d');
            canvas.width = canvas.height = this.size;
            ctx.translate(this.size / 2, this.size / 2);
            let radius = (this.size - this.lineWidth) / 2;
            this.drawCircle(this.innerColor, 1, 100 / 100, ctx, radius);
            this.drawCircle(this.outerColor, this.lineWidth, percent / 100, ctx, radius);
        }
    },
    mounted: function() {
        this.makeCircle(this.$el.querySelector('canvas'), this.percent);
    }
})

const vueModel = new Vue({
    el: '#skills__widget',
    template: '#skills__components',
    components: { skillsList, skills, skill }
});