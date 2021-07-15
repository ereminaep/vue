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
        async create({ commit, dispatch }, title) {
            try {
                const { data } = await this.$axios.post('/categories', { title })
                commit("ADD_CATEGORY", data);
                dispatch('tooltips/show', {
                    text: "Категория успешно добавлена",
                    type: "success"
                }, { root: true });
            } catch (error) {
                dispatch('tooltips/show', {
                    text: "Ошибка добавления категории",
                    type: "error"
                }, { root: true });
            }
        },
        async edit({ commit, dispatch }, categoryData) {
            try {
                const { data } = await this.$axios.post(`/categories/${categoryData.id}`, { title: categoryData.title });
                commit("EDIT_CATEGORY", data.category);
                dispatch('tooltips/show', {
                    text: "Категория успешно отредактирована",
                    type: "success"
                }, { root: true });
            } catch (error) {
                dispatch('tooltips/show', {
                    text: "Ошибка редактирования категории",
                    type: "error"
                }, { root: true });
            }
        },
        async remove({ commit, dispatch }, categoryId) {
            try {
                const { data } = await this.$axios.delete(`/categories/${categoryId}`)
                commit("REMOVE_CATEGORY", categoryId);
                dispatch('tooltips/show', {
                    text: "Категория успешно удалена",
                    type: "success"
                }, { root: true });
            } catch (error) {
                dispatch('tooltips/show', {
                    text: "Ошибка удаления категории",
                    type: "error"
                }, { root: true });
            }
        },
        async fetch({ commit, dispatch }) {
            try {
                const { data: { user } } = await this.$axios.get('/user')
                const { data } = await this.$axios.get(`/categories/${user.id}`)
                commit("SET_CATEGORIES", data)
            } catch (error) {
                dispatch('tooltips/show', {
                    text: "Ошибка загрузки данных",
                    type: "error"
                }, { root: true });
            }
        }
    }
}