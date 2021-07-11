<template lang="pug">
  .app-container 
    router-view
    div(:class="['notify-container', {active: isTooltipShown}]")
      .notification
        notification(
          :text="tooltipText"
          :type="tooltipType"
          @click="hideTooltip"
        )
</template>

<script>

import topApp from "./components/top-app/top-app";
import notification from "./components/notification";

import{mapState,mapActions} from "vuex";

export default {
  components:{topApp,notification},
  computed:{
    ...mapState("tooltips",{
      isTooltipShown: (state) => state.isShown,
      tooltipText: (state) => state.text,
      tooltipType: (state) => state.type
    })
  },
  methods:{
    ...mapActions({
      hideTooltip: "tooltips/hide"
    }),
    redirectLogin(){
      if(!localStorage.getItem('token')) {
        this.$router.replace('/admin/login/');
      }
    }
  },
  beforeUpdate() {
    this.redirectLogin();
  },
  created(){
    this.redirectLogin();
  }
};

</script>

<style lang="postcss">

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";

  .wrapper{
    background-color:#F8FAFE;
  }
</style>

<style lang="postcss" scoped src="./app.pcss">
</style>

