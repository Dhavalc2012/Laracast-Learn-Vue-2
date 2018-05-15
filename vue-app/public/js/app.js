new Vue({
    el : "#app",
    data:{
        skills:[]
    },
    created(){
        //Make an ajax request to our server 
        axios.get('/skills').then(response => this.skills = response.data);
    }
});