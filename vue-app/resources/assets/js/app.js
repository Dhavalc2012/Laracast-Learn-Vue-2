
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import router from './routes';
import Form from './core/Form';

window.Form = Form;

window.Vue = Vue;
Vue.use(VueRouter);
 window.axios = axios;

 window.axios.defaults.headers.common = {
   'X-Requested-With' : 'XMLHttpRequest'
 };

new Vue({
   el : "#app",
   router
 });