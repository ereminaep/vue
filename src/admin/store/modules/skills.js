export default {
    namespaced: true,
    actions: {
        async add({ commit, dispatch }, skill) {
            try {
                const { data } = await this.$axios.post('/skills', skill);
                console.log(data);
                commit("categories/ADD_SKILL", data, { root: true });
                dispatch('tooltips/show', {
                    text: "Скилл успешно добавлен",
                    type: "success"
                }, { root: true });
            } catch (error) {
                dispatch('tooltips/show', {
                    text: "Ошибка добавления скилла",
                    type: "error"
                }, { root: true });
            }
        },
        async remove({ commit, dispatch }, skillToRemove) {
            try {
                const { data } = await this.$axios.delete(`/skills/${skillToRemove.id}`);
                commit("categories/REMOVE_SKILL", skillToRemove, { root: true });
                dispatch('tooltips/show', {
                    text: "Скилл успешно удален",
                    type: "success"
                }, { root: true });
            } catch (error) {
                dispatch('tooltips/show', {
                    text: "Ошибка удаления скилла",
                    type: "error"
                }, { root: true });
            }
        },
        async edit({ commit, dispatch }, skillToEdit) {
            try {
                const { data } = await this.$axios.post(`/skills/${skillToEdit.id}`, skillToEdit);
                commit("categories/EDIT_SKILL", data.skill, { root: true });
                dispatch('tooltips/show', {
                    text: "Скилл успешно изменен",
                    type: "success"
                }, { root: true });
            } catch (error) {
                dispatch('tooltips/show', {
                    text: "Ошибка редактирования скилла",
                    type: "error"
                }, { root: true });
            }
        }
    }
}