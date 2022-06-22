<template>
   <span class="flex flex-wrap">
     <router-link  to="/projects" active-class="bg-black text-white"  class=" px-2  rounded-sm flex justify-center items-center  mb-5  cursor-pointer">All</router-link>
    <router-link :to="{name: 'projectFilter',params : {name : 'laravel'}}" active-class="bg-black text-white" class=" px-2 rounded-sm flex justify-center items-center  cursor-pointer mb-5">Laravel</router-link>
    <router-link  :to="{name: 'projectFilter',params : {name : 'tailwind'}}" active-class="bg-black text-white"  class=" px-2 rounded-sm flex justify-center items-center  cursor-pointer mb-5">Tailwind</router-link>
    <router-link  :to="{name: 'projectFilter',params : {name : 'vue'}}" active-class="bg-black text-white" class=" px-2 rounded-sm flex justify-center items-center cursor-pointer mb-5" >Vue</router-link>
    <router-link  :to="{name: 'projectFilter',params : {name : 'bootstrap'}}" active-class="bg-black text-white" class=" px-2 rounded-sm flex justify-center items-center cursor-pointer mb-5" >Bootstrap</router-link>
   </span>
</template>
<script setup>
</script>



