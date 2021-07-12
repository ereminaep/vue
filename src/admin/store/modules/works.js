export default {
    namespaced: true,
    state: {
        data: [],
    },
    mutations: {
        SET_WORKS: (state, works) => { state.data = works },
        ADD_WORK: (state, work) => {
            state.data.unshift(work)
            return work;
        },
        EDIT_WORK: (state, newWork) => {
            state.data = state.data.map(work => {
                if (work.id === newWork.id) {
                    work.name = newWork.name;
                }
                return work;
            })
        },
        REMOVE_WORK: (state, workId) => {
            state.data = state.data.filter(item => item.id != workId);
            return state;
        }
    },
    actions: {
        async create({ commit, dispatch }, work) {
            try {
                const { data } = await this.$axios.post('/works', work)
                commit("ADD_WORK", data);
            } catch (error) {
                dispatch('tooltips/show', {
                    text: "Ошибка добавления работы",
                    type: "error"
                }, { root: true });
            }
        },
        async edit({ commit, dispatch }, categoryData) {
            try {
                const { data } = await this.$axios.post(`/works/${categoryData.id}`, { title: categoryData.title });
                commit("EDIT_WORK", data.category)
            } catch (error) {
                dispatch('tooltips/show', {
                    text: "Ошибка редактирования работы",
                    type: "error"
                }, { root: true });
            }
        },
        async remove({ commit, dispatch }, workId) {
            try {
                const { data } = await this.$axios.delete(`/works/${workId}`)
                commit("REMOVE_WORK", workId);
            } catch (error) {
                dispatch('tooltips/show', {
                    text: "Ошибка удаления работы",
                    type: "error"
                }, { root: true });
            }
        },
        async fetch({ commit, dispatch }) {
            try {
                const { data } = await this.$axios.get('/works/466')
                commit("SET_WORKS", data)
            } catch (error) {
                dispatch('tooltips/show', {
                    text: "Ошибка загрузки данных",
                    type: "error"
                }, { root: true });
            }
        }
    }
}