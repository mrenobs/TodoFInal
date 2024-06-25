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
const upDate = (task) => {
  let newTitle = prompt("Edit task", task.title);
  if(newTitle !== null && newTitle !== ""){
    task.title = newTitle;
    taskStore.updateTaskTitle(task);
  }
}

const logoutButton = () => {
  userStore.logout();
  taskStore.tasks = null;
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
      
		    <button @click="userStore.createNewUser(email, password)" style="background-color: blue;"> <img src="../assets/images/my5qihx4.png" width="20px">Crear Usuario </button>
		    <button @click="userStore.login" > <img src="../assets/images/272456.png" alt="" width="20px"> Usuario </button>
		    <button @click="logoutButton" >  <img src="../assets/images/4103045.png" alt="" width="25px"> LogOut </button>
      
      </div>
    
      <div v-if="userStore.user">
        <div>
          <h2>Usuario logueado: {{ userStore.user.user.email }}</h2>
        </div>
      
        <div>
          <button @click="taskStore.fetchTasks()" > Tareas <img src="../assets/images/4ry4t5va.png" width="20px"></button>
        </div>


        
        <div>
          
          <ul >
            <h3>Estas son tus tareas pendientes</h3>
            <li v-for="task in taskStore.tasks"  class="ul"> 
            {{ task.title }} 
            <button @click="deleteTask(task.id)" >
              <img src="../assets/images/92dgomml.png" alt="10px" width="15px" >
            </button>
            <button @click="upDate(task)">
              <img src="../assets/images/3mbzznxi.png" alt="" width="15px" >
            </button>
            
            </li>
          </ul>
        </div>

        <div class="inputContainer">
          <div class="input1">
            <label for=""></label>
            <input type="text" v-model="taskTitle">
          <button @click="createTask('Prueba')" >insert tasks <img src="../assets/images/bk8mykix.png" width="25px"></button>
          </div>
          
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
  font-size: 13px;
  background: #ff5945;
  cursor: pointer;  

  
}

@import '~@fortawesome/free-brands-svg-icons'
</style>
