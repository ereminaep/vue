const skills = {
    state: {
        skills: require('./../../../data/skills.json'),
        categories: require('./../../../data/categories.json')
    },
    mutations: {
        removeSkill(state, skillId) {
            state.skills[skillId].active = false;
        },
        changeSkill(state, skill) {
            state.skills[skill.id].name = skill.name;
            state.skills[skill.id].percent = skill.percent;
        },
        addSkill(state, skill) {
            console.log(state.getters.activeSkills.skills);
            let id = Number(Object.keys(state.getters.activeSkills).pop()) + 1;

            let newSkill = {
                name: skill.name,
                percent: skill.percent,
                active: true,
                categoryId: skill.categoryId,
                id: id
            }

            state.getters.activeSkills[id] = newSkill;

            for (let value of state.categories) {
                if (value.id == skill.categoryId) {
                    value.items.push(String(id));
                }
            }

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
                value.items = value.items.filter(item => state.skills[item].active);
            }
            return result;
        }
    }
}

export default skills;