<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                HomePage 
            </div>
            <div class="col-sm-12">
               <div class="col-sm-12" v-for="status in statuses">
                    {{ status.user.name }}
                   {{ postedOn(status) }}
                    <div v-text="status.body"></div>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import Status from '../models/Status'
    export default {
        data(){
            return {
                statuses :[],
            }
        },
        created(){
           Status.all(statuses => this.statuses = statuses)
        },
        methods :{
            postedOn(status){
                return moment(status.created_at).fromNow();
            }
        }
    }
</script>
