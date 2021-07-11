<template lang="pug">
  card(:title="title[type]")
    form(slot="content").form
      .form-side
        .img-load
          .drop-text Перетащите или загрузите для загрузки изображения
          appButton(title="Загрузить" v-model="work.photo" typeAttr="file" @change="$emit('load')").file
      .form-side
        appInput(title="Название" v-model="work.name").work-input
        appInput(title="Ссылка" v-model="work.link").work-input
        appInput(title="Сообщение" v-model="work.description" fieldType="textarea").work-input
        tags(:items='work.tags')
        .buttons
          appButton(plain title="Отмена" @click.prevent="$emit('reset')")
          appButton(title="Отправить" @click.prevent="$emit('save')")

</template>

<script>
import icon from "../icon/icon.vue";
import card from "../card/card.vue";
import appInput from "../input/input.vue";
import appButton from "../button/button.vue";
import tags from "../tags/tags.vue";

export default {
  components:{icon,card,appInput,tags,appButton},
  props: {
    work: {
      type: Object
    },
    type:{
      type: String,
      default:'edit'
    }
  },
  data() {
    return {
      title:{
        'add':"Добавление работы",
        'edit':"Редактирование работы"
      }
    }
  }
}
</script>

<style lang="postcss" scoped src="./add-work.pcss"></style>