
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 import Vue from 'vue';
Vue.component('coupon',{
  props:['code'],
  model: {
    prop: 'code',
    event: 'input'
    },
  template :`
  <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input">
  `,
  methods : {
    updateCode(code){
      if(code === "ALLFREE"){
        alert('This coupon is no longer valid sorry');
        this.$refs.input.value = code = "";
      }
      this.$emit('input',code);
    }
  }
});


new Vue({
  el : "#app",
  data:{
    coupon : 'FREEBIE'
  }
  }
);