const skills = {
    state: {
        skills: require('./../../../data/skills.json'),
        categories: require('./../../../data/categories.json')
    },
    mutations: {
        removeSkill(state, skillId) {
            state.skills[skillId].active = false;
        }
    },
    actions: {},
    getters: {
        activeSkills(state) {
            let result = {};
            for (let key in state.skills) {
                if (state.skills[key].active) {
                    result[key] = state.skills[key];
                }
            }
            return result;
        },
        categriesWithActiveSkills(state) {
            let result = state.categories;
            for (let value of result) {
                console.log(value.items);
                value.items = value.items.filter(item => state.skills[item].active);
            }

            return result;
        }
    }
}

export default skills;