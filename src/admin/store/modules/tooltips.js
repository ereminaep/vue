export default {
    namespaced: true,
    state: {
        isShow: false,
        text: "",
        type: "success"
    },
    mutations: {
        SET_TOOLTIP: (state, tooltip) => {
            state.isShow = tooltip.text;
            state.text = tooltip.text;
            state.type = tooltip.type;
        }
    },
    actions: {
        show({ commit }, tooltip) {
            commit("SET_TOOLTIP", {
                isShown: true,
                text: tooltip.text,
                type: tooltip.type
            })
        }
    }
}