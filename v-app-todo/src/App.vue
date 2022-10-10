<template>
  <!-- <Suspense> -->
    <div class="main">
      <h1>Todos</h1>
      <h2>{{ apiUrl }}</h2>
      <!-- <AddTodo :addFn="addTodo" />
      <div v-for="todo in todos" :key="todo.id">      
        <ToDo :msg="todo.msg" :check="todo.check" :onCheck="updateTodo" :id="todo.id"/>
      </div> -->
      <Tasks :apiUrl="apiUrl"/>
    </div>
  <!-- </Suspense> -->
</template>

<script>
// import ToDo from './components/ToDo.vue'
// import AddTodo from './components/AddTodo.vue'
import Tasks from './components/Tasks.vue'
import apiManager from './common/apiManager'

import { ref, computed } from "vue"

export default {
  name: 'App',
  components: {
    // ToDo,
    // AddTodo,
    Tasks,
  },
  props:{
    apiUrl: String
  },
  setup(props) {
    var todos = ref([{
      id: "1",
      check: false,
      msg: 'Welcome to Todos'
    }]);

    apiManager.getData(props.apiUrl).then(data => {
      if(data.length){
        todos.value = data;
      }
    })

    async function addTodo(msg){
      var resp = await apiManager.postData(props.apiUrl, {msg, check: false});
      if(todos.value[0].id === "1")
        todos.value = [];
      todos.value.push(resp);
    }

    async function updateTodo(id, checked){
      var todo = todos.value.find(x => x.id === id);
      todo.check = checked;
      var resp = await apiManager.putData(props.apiUrl, todo);
      console.log(resp);
    }

    return {
      todos,
      addTodo,
      updateTodo,
      length: computed(()=>todos.value.length)
    };
  },
}
</script>
<style lang="scss">
  // @import url('./index.css');
  @import url('./assets/style.css');
  @import url('./assets/bootstrap.min.css');
</style>

