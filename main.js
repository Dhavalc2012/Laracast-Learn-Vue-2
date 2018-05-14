Vue.component('task-list',{
    template:`<div>
    <li v-for="task in tasks">{{task.task}}</li>
    </div>`,
    data(){
        return {
            tasks : [
                {
                    task : 'Go to the store',
                    complete : true
                },
                {
                    task : 'Complete the website',
                    complete : false
                },
                {
                    task : 'Change the designing',
                    complete : false
                },
                {
                    task : 'Map up the task',
                    complete : true
                },
            ]
        }
    }
});
Vue.component('task',{
    template:'<li><slot></slot></li>'
});
new Vue({
    el:'#root'
});