
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 import Vue from 'vue';
 import axios from 'axios';
import Form from './core/Form';
import Example from './components/Example'

window.axios = axios;
window.Form = Form;



new Vue({
    el: "#app",
    components:{
        Example
    },
    data: {
      form: new Form({
        name: "",
        description: ""
      })
    },
    methods: {
      onSubmit() {
        this.form.submit("post", "/projects")
        .then(data => alert('Handling It!'))
        .catch(error =>console.log(error));
      },
    }
  });
  
