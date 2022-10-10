<template>
  <div style="containerAdd">
    <div class="txtbox">
      <textarea type="textbox" v-model="todo" @input="textChange"/>
    </div>
    <div class="btn">
      <button @click="addFunc()">Add</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ToDo',
    data(){
        return {
            todo: ''
        }
    },
    props: {
        addFn: Function,
    },
    methods: {
        getTodo(){
            return this.todo;
        },
        addFunc(){
            this.addFn(this.todo);
            this.todo = '';
        },
        textChange(event){
            this.todo = event.target.value;
        }
    },
}   
</script>

