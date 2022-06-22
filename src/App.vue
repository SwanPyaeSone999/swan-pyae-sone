<script setup>
import { ref } from '@vue/reactivity'
import { RouterLink, RouterView } from 'vue-router'

const showmenu = ref(true);
const toggleMenu = ()  => {
  showmenu.value = !showmenu.value;
}
</script>

<template>
<div class="selection:bg-yellow-400">
  <button v-if="showmenu" class="bg-black text-white block md:hidden  p-2 rounded-sm fixed z-50 bottom-5 right-4" @click="toggleMenu">
       <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
      </svg>
  </button>
  <div  v-if="!showmenu" class="fixed top-0 w-full h-full z-20 bg-black flex items-center justify-center text-xl text-white">
     <button class="bg-black text-white  p-2 rounded-sm fixed top-5  right-5" @click="toggleMenu">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    </button>
    <ul class="space-y-4">
      <li>
        <router-link to="/"  @click="toggleMenu">About Me</router-link>
      </li>
      <li>
        <router-link to="/projects"  @click="toggleMenu">Projects</router-link>
      </li>
      <li>
        <router-link to="/contact"  @click="toggleMenu">Contact Me</router-link>
      </li>
    </ul>
  </div>
  <RouterView v-slot="{Component}">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </RouterView>
</div>
</template>

<style >
  @import url('https://fonts.googleapis.com/css2?family=Hubballi&family=Roboto:wght@300&display=swap');
  html{
    zoom: 90%;
  }
  body{
    font-family: 'Hubballi', cursive;
    font-weight: bold;
    background-color:  antiquewhite;
  }
  .fade-enter-from{
    opacity: 0;
  }
  .fade-enter-active{
    transition: all 0.7s ease-in-out;
  }
  .fade-leave-to{
      opacity: 0;
  }
  .fade-leave-active{
    transition: all 0.7s ease-in-out;
  }
</style>
