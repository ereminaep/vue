export default {
    namespaced: true,
    actions: {
        async add({ commit, dispatch }, skill) {
            try {
                const { data } = await this.$axios.post('/skills', skill);
                console.log(data);
                commit("categories/ADD_SKILL", data, { root: true })
            } catch (error) {
                dispatch('tooltips/show', {
                    text: error.response.data.message,
                    type: "error"
                }, { root: true });
            }
        },
        async remove({ commit, dispatch }, skillToRemove) {
            try {
                const { data } = await this.$axios.delete(`/skills/${skillToRemove.id}`);
                commit("categories/REMOVE_SKILL", skillToRemove, { root: true })
            } catch (error) {
                dispatch('tooltips/show', {
                    text: error.response.data.message,
                    type: "error"
                }, { root: true });
            }
        },
        async edit({ commit, dispatch }, skillToEdit) {
            try {
                const { data } = await this.$axios.post(`/skills/${skillToEdit.id}`, skillToEdit);
                commit("categories/EDIT_SKILL", data.skill, { root: true })
            } catch (error) {
                dispatch('tooltips/show', {
                    text: error.response.data.message,
                    type: "error"
                }, { root: true });
            }
        }
    }
}