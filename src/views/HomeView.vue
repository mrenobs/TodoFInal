<script setup>
import { useUserStore } from "../stores/user";
import { useTaskStore} from "../stores/task";
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";



const userStore = useUserStore();
const taskStore = useTaskStore();

const email = ref("");
const password = ref("");
const login = ref("");
const seeUser = ref("");
const logout = ref("")
const taskTitle = ref("")

const createTask = (title) =>{
  taskStore.insertData(taskTitle.value, userStore.user.user.id);
}

const deleteTask = (id) => {
  taskStore.deleteData(id);
}

</script>

<template>
  
  <div class="form">   
    <div class="todo-app">
      <h1 >
      To-Do List
      <img src="../assets/images/4f1def5860395711e6e9744514340ec5.png" >
     </h1>
	    <div class="inputContainer" >
		    <label for="email"> Email: </label>
		    <input type="email" id="email" v-model="email">
	   </div>

	    <div class="inputContainer" >
		    <label for="email"> Password: </label>
		    <input type="password" id="password" v-model="password">
      </div>


	    <div class="buttonContainer">
      
		    <button @click="userStore.createNewUser(email, password)" > Create </button>
		    <button @click="userStore.login" > Login </button>
		    <button @click="userStore.seeUser" > See user </button>
		    <button @click="userStore.logout" > Logout </button>
      
      </div>
    
      <br><br>
      <div>
        <button @click="taskStore.fetchTasks()" >fetch tasks</button>
      </div>

      <!--boton editar tareas y su funcion-->

      
      <div>
        <ul >
          <li v-for="task in taskStore.tasks"  class="ul">
           {{ task.title }} 
           <button @click="deleteTask(task.id)" >
            <img src="../assets/images/checked1.jpg" alt="10px" width="15px" >
           </button>
           <button>editar</button>
          </li>
        </ul>
      </div>

      <div class="inputContainer">
        <div class="input1">
          <label for=""></label>
          <input type="text" v-model="taskTitle">
        <button @click="createTask('Prueba')">insert tasks</button>
        </div>
        
      </div>

    </div>

    
  </div>

</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  font-family:'Poppins', sans-serif;
  box-sizing: border-box;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #153677, #4e085f);
  padding: 10px;
  width: 100%;
  min-height: 100vh;

}
.todo-app{
  width: 100%;
  max-width: 540px;
  background: #fff;
  margin: 100px auto 20px;
  padding: 40px 30px 70px;
  border-radius: 10px;
}
.todo-app h1 {
  color: #002765;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

}
.todo-app h1 img{
  width: 30px;
  margin-left: 10px;
}
.inputContainer {
	display: flex;
	flex-direction: wrap;
  align-items: center;
  width: 300px;
  justify-content: space-between;
  background: #edeef0;
  border-radius: 30px;
  padding-left: 20px;
  margin-bottom: 25px;
  
}

input {
	font-size: 1.5em;
  align-items: center;
  width: 300px;
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  padding: 10px;
  cursor: pointer;  
  border-radius: 30px;


}
.input1{
  display: flex;
  flex-direction: wrap;
  font-size: 0.5em;
  border-radius: 30px;
  padding-left: 20px;
  background: #edeef0;
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;  

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
  border-radius: 50px;
  color: #fff;
  font-size: 16px;
  background: #ff5945;
  cursor: pointer;  

  
}


</style>
