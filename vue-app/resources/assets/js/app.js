
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 import Vue from 'vue';
 let source = {
  user: {
    name : 'John Doe'
  }};
new Vue({
  el : "#one",
  data:source
  }
);


new Vue({
  el : "#two",
  data:source
  }
);