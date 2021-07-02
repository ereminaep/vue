import skillGroup from "./skill-group.vue";

export default {
    title: "skillGroup"
};

export const defaultView = () => ({
    components: { skillGroup },
    template: `
    <skillGroup :group='group' :skills='skills' ></skillGroup>
  `,
    props: {
        group: {
            type: Object,
            default: {
                "id": 1,
                "group": "Front-end",
                "items": ["1", "2", "3", "4"]
            }
        },
        skills: {
            type: Object,
            default: {
                "1": {
                    "id": 1,
                    "name": "HTML5",
                    "percent": 80
                },
                "2": {
                    "id": 2,
                    "name": "CSS3",
                    "percent": 55
                },
                "3": {
                    "id": 3,
                    "name": "Javascript",
                    "percent": 40
                },
                "4": {
                    "id": 4,
                    "name": "Jquery и Vue.js",
                    "percent": 25
                },
                "5": {
                    "id": 5,
                    "name": "GIT",
                    "percent": 80
                },
                "6": {
                    "id": 6,
                    "name": "Terminal",
                    "percent": 76
                },
                "7": {
                    "id": 7,
                    "name": "Gulp",
                    "percent": 30
                },
                "8": {
                    "id": 8,
                    "name": "Webpack",
                    "percent": 50
                }
            }
        }
    },
});

defaultView.story = {
    name: "Стандартный вид"
}