<template>
    <div class="h-100 bg-light rounded p-4">
        <div class="d-flex align-items-center justify-content-between mb-4">
            <h6 class="mb-0">To Do List</h6>
            <a href="">Show All</a>
        </div>
        <div class="d-flex mb-2">
            <input class="form-control bg-transparent" type="text" placeholder="Enter task" v-model="task" @input="textChange">
            <button type="button" class="btn btn-primary ms-2" @click="addTask">Add</button>
        </div>
        <div v-for="(task, index) in tasks" :key="task.id" :class="taskClass(index)" >
            <input class="form-check-input m-0" type="checkbox" v-model="task.check" @change="updateTask(task.id, task.check)">
            <div class="w-100 ms-3">
                <div class="d-flex w-100 align-items-center justify-content-between">
                    <span>{{task.msg}}</span>
                    <button class="btn btn-sm"><i class="fa fa-times"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import apiManager from '../common/apiManager'

export default{
    name: 'DashTodo',
    props: {
        apiUrl: String
    },
    setup(props){
        var task = ref('');
        var tasks = ref([{
            id: "1",
            check: false,
            msg: 'Welcome to Todos'
        }]);  

        apiManager.getData(props.apiUrl).then(data => {
            if(data.length){
                tasks.value = data;
            }
        })

        return {
            task,
            tasks,
            async addTask(){
                var resp = await apiManager.postData(props.apiUrl, {msg: task.value, check: false});
                if(tasks.value[0].id === "1")
                    tasks.value = [];
                tasks.value.push(resp);
                task.value = '';
            },
            async updateTask(id, checked){
                var todo = tasks.value.find(x => x.id === id);
                todo.check = checked;
                var resp = await apiManager.putData(props.apiUrl, todo);
                console.log(resp);
            },
            textChange(event){
                task.value = event.target.value;
            },
            taskClass(index){
                if(index === tasks.value.length)
                    return 'd-flex align-items-center pt-2';
                else
                    return 'd-flex align-items-center border-bottom py-2';
            }
        }
    }
}
</script>