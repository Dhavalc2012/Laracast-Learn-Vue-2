<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                HomePage 
            </div>
            <div class="col-sm-12">
               <div class="col-sm-12" v-for="status in statuses">
                    {{ status.user.name }}
                   {{ status.created_at | ago }}
                    <div v-text="status.body"></div>

               </div>
               <!-- add to stream form -->
               <add-to-stream @completed="addStatus"></add-to-stream>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import Status from '../models/Status'
import AddToStream from '../components/AddToStream'
    export default {
        components : {
            AddToStream
        },
        data(){
            return {
                statuses :[],
            }
        },
        filters : {
            ago(date){
                return moment(date).fromNow();
            }
        },
        created(){
           Status.all(statuses => this.statuses = statuses)
        },
        methods : {
            addStatus(status){
            this.statuses.unshift(status);
            windot.scrollTo(0,0);
            }
        }
    }
</script>
