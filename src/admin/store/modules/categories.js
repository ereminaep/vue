export default {
    namespaced: true,
    state: {
        data: [],
    },
    mutations: {
        SET_CATEGORIES: (state, categories) => { state.data = categories },
        ADD_CATEGORY: (state, category) => {
            state.data.unshift(category)
            return category;
        },
        EDIT_CATEGORY: (state, newCategory) => {
            state.data = state.data.map(category => {
                if (category.id === newCategory.id) {
                    category.category = newCategory.category;
                }
                return category;
            })

            console.log(state);
        },
        REMOVE_CATEGORY: (state, categoryId) => {
            state.data = state.data.filter(item => item.id != categoryId);
            return state;
        },
        ADD_SKILL: (state, newSkill) => {
            state.data = state.data.map(category => {
                if (category.id === newSkill.category) {
                    if (category.skills == undefined) {
                        category.skills = [];
                    }
                    category.skills.push(newSkill);

                }

                return category;
            })
        },
        REMOVE_SKILL: (state, skillToRemove) => {
            state.data = state.data.map(category => {
                if (category.id === skillToRemove.category) {
                    category.skills = category.skills.filter(skill => skill.id !== skillToRemove.id)
                }
                return category;
            })
        },
        EDIT_SKILL: (state, skillToEdit) => {
            const editSkillInCategory = category => {
                category.skills = category.skills.map(skill => {
                    return skill.id === skillToEdit.id ? skillToEdit : skill
                });
            }

            const findCategory = category => {
                if (category.id === skillToEdit.category) {
                    editSkillInCategory(category);
                }

                return category;
            }
            state.data = state.data.map(findCategory);
        }
    },
    actions: {
        async create({ commit }, title) {
            try {
                const { data } = await this.$axios.post('/categories', { title })
                commit("ADD_CATEGORY", data);
            } catch (error) {
                throw new Error("произошла ошибка");
            }
        },
        async edit({ commit }, categoryData) {
            try {
                const { data } = await this.$axios.post(`/categories/${categoryData.id}`, { title: categoryData.title });
                commit("EDIT_CATEGORY", data.category)
            } catch (error) {
                console.log(error);
                throw new Error("Ошибка")
            }
        },
        async remove({ commit }, categoryId) {
            try {
                const { data } = await this.$axios.delete(`/categories/${categoryId}`)
                commit("categories/REMOVE_CATEGORY", categoryId, { root: true });
            } catch (error) {
                console.log(error);
                throw new Error("Ошибка")
            }
        },
        async fetch({ commit }) {
            try {
                const { data } = await this.$axios.get('/categories/466')
                commit("SET_CATEGORIES", data)
            } catch (error) {
                console.log(error);
            }
        }
    }
}