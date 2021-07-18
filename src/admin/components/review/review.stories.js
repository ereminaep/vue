import review from "./review.vue";
import { action } from "@storybook/addon-actions";

export default {
    title: "review",
    components: { review }
};

const methods = {
    onEdit: action("onEdit"),
    onRemove: action("onRemove")
}

export const defaultView = () => ({
    components: { review },
    props: {
        review: {
            default: {
                id: 1,
                author: "Фамилия Имя",
                text: "Текст отзыва",
                occ: "https://google.com",
                photo: "https://bipbap.ru/wp-content/uploads/2018/04/0_7c773_e4f21b71_XL-640x400.jpg"
            }
        }
    },
    template: `
    <review :review='review' @edit="onEdit" @remove="onRemove"/>
  `,
    methods

});

defaultView.story = {
    name: "Стандартный вид"
}