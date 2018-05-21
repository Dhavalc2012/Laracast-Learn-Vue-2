<template>
    <div class="message">
        <div class="message-header">
            Push To The Stream.
        </div>
        <div class="message-body">
            <form @submit.prevent="onSubmit" @keydown="form.errors.clear()">
                <p class="control">
                <textarea name="" class="textarea" placeholder="I have something to say..." id="" v-model="form.body"></textarea>                    
               <span class="help is-danger" v-if="form.errors.has('body')" v-text="form.errors.get('body')"></span>
                </p>

                <p class="control">
                    <button type="submit" :disabled="form.errors.any()" class="btn is-primary">Submit</button>
                </p>
            </form>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                    form : new Form({body:''})
            }
        },
        methods :{
            onSubmit(){
                //submit ajax request
                this.form.submit('post','/statuses').then(status => this.$emit('completed',status));
            }
        }

    }
</script>
