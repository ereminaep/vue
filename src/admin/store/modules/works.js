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
            console.log(newWork);
            state.data = state.data.map(work => {
                if (work.id === newWork.id) {
                    console.log(work.id);
                    work.title = newWork.title;
                    work.techs = newWork.techs;
                    work.photo = newWork.photo;
                    work.link = newWork.link;
                    work.description = newWork.description;
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
                dispatch('tooltips/show', {
                    text: "Работа успешно добавлена",
                    type: "success"
                }, { root: true });
            } catch (error) {
                dispatch('tooltips/show', {
                    text: "Ошибка добавления работы",
                    type: "error"
                }, { root: true });
            }
        },
        async edit({ commit, dispatch }, workData) {
            try {
                const { data } = await this.$axios.post(`/works/${workData.id}`, workData.data);
                commit("EDIT_WORK", data.work);
                dispatch('tooltips/show', {
                    text: "Работа успешно отредактирована",
                    type: "success"
                }, { root: true });
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
                dispatch('tooltips/show', {
                    text: "Работа успешно удалена",
                    type: "success"
                }, { root: true });
            } catch (error) {
                dispatch('tooltips/show', {
                    text: "Ошибка удаления работы",
                    type: "error"
                }, { root: true });
            }
        },
        async fetch({ commit, dispatch }) {
            try {
                let userId;
                try {
                    const { data: { user } } = await this.$axios.get('/user')
                    userId = user.id
                } catch (error) {
                    userId = 466;
                }
                const { data } = await this.$axios.get(`/works/${userId}`)
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