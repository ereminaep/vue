export default {
    namespaced: true,
    state: {
        data: [],
    },
    mutations: {
        SET_REVIEWS: (state, review) => { state.data = review },
        ADD_REVIEW: (state, review) => {
            state.data.unshift(review)
            return review;
        },
        EDIT_REVIEW: (state, newReview) => {
            state.data = state.data.map(review => {
                if (review.id === newReview.id) {
                    review.author = newReview.author;
                    review.occ = newReview.occ;
                    review.photo = newReview.photo;
                    review.text = newReview.text;
                }
                return review;
            })
        },
        REMOVE_REVIEW: (state, reviewId) => {
            state.data = state.data.filter(item => item.id != reviewId);
            return state;
        }
    },
    actions: {
        async create({ commit, dispatch }, review) {
            try {
                const { data } = await this.$axios.post('/reviews', review)
                commit("ADD_REVIEW", data);
                dispatch('tooltips/show', {
                    text: "Отзыв успешно добавлен",
                    type: "success"
                }, { root: true });
            } catch (error) {
                dispatch('tooltips/show', {
                    text: "Ошибка добавления отзыва",
                    type: "error"
                }, { root: true });
            }
        },
        async edit({ commit, dispatch }, reviewData) {
            try {
                const { data } = await this.$axios.post(`/reviews/${reviewData.id}`, reviewData.data);
                commit("EDIT_REVIEW", data.review);
                dispatch('tooltips/show', {
                    text: "Отзыв успешно отредактирован",
                    type: "success"
                }, { root: true });
            } catch (error) {
                dispatch('tooltips/show', {
                    text: "Ошибка редактирования отзыва",
                    type: "error"
                }, { root: true });
            }
        },
        async remove({ commit, dispatch }, reviewId) {
            try {
                const { data } = await this.$axios.delete(`/reviews/${reviewId}`)
                commit("REMOVE_REVIEW", reviewId);
                dispatch('tooltips/show', {
                    text: "Отзыв успешно удален",
                    type: "success"
                }, { root: true });
            } catch (error) {
                dispatch('tooltips/show', {
                    text: "Ошибка удаления отзыва",
                    type: "error"
                }, { root: true });
            }
        },
        async fetch({ commit, dispatch }) {
            try {
                const { data } = await this.$axios.get('/reviews/466')
                commit("SET_REVIEWS", data)
            } catch (error) {
                dispatch('tooltips/show', {
                    text: "Ошибка загрузки данных",
                    type: "error"
                }, { root: true });
            }
        }
    }
}