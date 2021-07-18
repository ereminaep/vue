<template lang="pug">
    div
      topApp
      .container    
        .head
          .title Блок «Отзывы»
        addReview(
          v-if='add' 
          type='add'
          @add="createReview"
          @reset='onReset'
          :review='{}'
        )
        addReview(
          v-else-if='edit'
          type='edit'
          :review='currentReview'
          @reset='onReset'
          @edit="changeReview"
        )
        .reviews-items
          squareBtn(type="square" title="Добавить отзыв" @click="add=true;edit=false;").review-item
          review(
            v-for='item in reviews' 
            :review='item'
            @remove="removeReview"
            @edit="editReview"
          ).review-item
</template>
<script>

import topApp from "../../components/top-app/top-app";
import squareBtn from "../../components/button/button";
import addReview from "../../components/add-review/add-review";
import review from "../../components/review/review";

import {mapState} from 'vuex';
import {mapActions} from 'vuex';

export default {
  components:{
    topApp,squareBtn,addReview,review
  },
  computed: {
    ...mapState("reviews",{
      reviews: state => state.data
    })
  },
  data(){ 
    return {
      currentReview:{},
      add:false,
      edit:false
    }
  },
  methods: {
    ...mapActions({
      createReviewAction: "reviews/create",
      fetchReviewsAction: "reviews/fetch",
      editReviewAction: "reviews/edit",
      removeReviewAction: "reviews/remove"
    }),
    async removeReview(review) {
      try {
        await this.removeReviewAction(review);
      } catch (error) {
        console.log(error.message); 
      }
    },
    async createReview(review) {
      try {
        await this.createReviewAction(review);
        this.add=false;
      } catch (error) {
        console.log(error.message); 
      }
    },
    async editReview(review){
      this.add=false;
      this.edit=true;
      this.currentReview=review;
      window.scrollTo({ top: 200, behavior: 'smooth' });
    },
    async changeReview(review){
      try {
        await this.editReviewAction(review);
        this.edit=false;
      } catch (error) {
        console.log(error.message); 
      }
    },
    onReset(){
      this.edit=false;
      this.add=false;
    }
  },
  created() {
    this.fetchReviewsAction();
  }
};

</script>

<style lang="postcss" scoped src="./reviews.pcss"></style>