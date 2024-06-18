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
  const insertData = async () => {
    const { error } = await supabase
    .from('tasks')
    .insert('id')
  }
  const deleteData = async () => {
    const response = await supabase
    .from('tasks')
    .delete()
    .eq('id', 1)
  }

  return { tasks, fetchTasks, insertData, deleteData}
  //mirar si las funciones de las tareas estan bien 
})