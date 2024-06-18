<script setup>
import { useUserStore } from "../stores/user";
import { useTaskStore} from "../stores/task";
import { ref } from "vue";




const userStore = useUserStore();
const taskStore = useTaskStore();

const email = ref("");
const password = ref("");
const login = ref("");
const seeUser = ref("");
const logout = ref("")
</script>

<template>
  <div class="form">   
    <h1>ToDo List</h1>
	  <div class="inputContainer">
		  <label for="email"> Email: </label>
		  <input type="email" id="email" v-model="email">
	  </div>

	  <div class="inputContainer">
		  <label for="email"> Password: </label>
		  <input type="password" id="password" v-model="password">
    </div>


	  <div class="buttonContainer">
		  <button @click="userStore.createNewUser(email, password)"> Create </button>
		  <button @click="userStore.login"> Login </button>
		  <button @click="userStore.seeUser"> See user </button>
		  <button @click="userStore.logout"> Logout </button>
      <!--revisar los botones-->
    </div>
    
    <br><br>
   <button @click="taskStore.fetchTasks()">fetch tasks</button>
   <button @click="taskStore.insertData()">insert tasks</button>

    <ul>
     <li v-for="task in taskStore.tasks">
       {{ task.title }}
     </li>
    </ul>
    <button @click="taskStore.deleteData()">Delete tasks</button>
  </div>

</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: beige;
}
.inputContainer {
	display: flex;
	flex-direction: column;
  align-items: center;
  width: 300px;
}

input {
	font-size: 1.5em;
  align-items: center;
  width: 300px;
}
.buttonContainer {
	display: flex;
	flex-direction: wrap;
  align-items: center;
  width: 300px;
  gap: 5px;

}

button {
	margin-bottom: 1em;
	padding: 1em 2em 1em 2em;
}

</style>
