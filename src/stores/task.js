import { defineStore } from "pinia";
import supabase from "@/lib/supabase"
import { ref } from "vue";

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);

  const fetchTasks = async () => {
    const { data, error } = await supabase
      .from('tasks')
      .select()

    if (error) console.log("Error: ", error);
    else tasks.value = data;
    console.log("tasks: ", tasks.value);
  }
  const insertData = async (title, user_id) => {
    const { data, error } = await supabase
      .from('tasks')
      .insert([
        { title: title, user_id: user_id },
      ])

    if (error) console.log("Error: ", error);    
    else tasks.value = data;
    console.log("tasks: ", tasks.value);

    fetchTasks();
  }
  const deleteData = async (id) => {
    const response = await supabase
    .from('tasks')
    .delete()
    .eq('id', id)

    fetchTasks()
  }

  return { tasks, fetchTasks, insertData, deleteData}
  //mirar si las funciones de las tareas estan bien 
})