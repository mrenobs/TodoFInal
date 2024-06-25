import { defineStore } from "pinia";
import supabase from "@/lib/supabase"
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const user = ref();

  const createNewUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
  
    if (error) console.log("error: ", error);
    else user.value = data;
    console.log("user :", user.value);
  };
  
  async function login() {
    console.log("run")
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
    if (error)
    {
      console.log(error);
    }
    else
    {
      console.log(data);
      user.value = data;
    }
  }
  
  async function logout() {
    const { error } = await supabase.auth.signOut();
  
    if (error) {
      console.log(error);
    }
    else {
      user.value = null;
      console.log("Sign out success")
    }
  }
  
  async function seeUser() {
    const localUser = await supabase.auth.getSession();
    console.log(localUser.data.session)
  }
  const upDate = async () => {
    const { error } = await supabase
    .from('tasks')
    .update({  title: task.title })
    .eq('id')
  }
  

  return { user, createNewUser, login, logout, seeUser, upDate }
});



