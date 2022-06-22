<template>
    <div v-for="(project) in projects" :key="project.index" class="md:col-span-2 col-span-full mb-5">
        <div class="relative group">
            <img class="bg-transparent shadow-lg rounded-sm   object-scale-down object-center group-hover:scale-105 transform  duration-300" :src="getImgUrl(project.asset)" alt="">
            <!-- <div class="absolute inset-0 z-10  group-hover:bg-yellow-100 group-hover:opacity-30"></div>        -->
            <!-- <a href="" class="absolute top-10 left-20   z-20 invisible group-hover:visible flex items-center">
                <svg class="  text-black h-8 w-8  transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100   group-hover:pr-2 font-bold" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            </a>   
            <a href="" class="absolute top-12 left-28   z-20 invisible group-hover:visible flex items-center">
                <img src="../assets/img/github-icon.png" class="text-black" alt="">
            </a>    -->
        </div>
        <div class="hover:underline mt-2">{{project.pjname}}</div>
        <div class="flex space-x-2 items-center mt-3">
            <a :href="project.live"  target="_blank" class="bg-yellow-500 flex items-center space-x-1 px-3 py-1 text-white rounded-sm shadow-md  shadow-yellow-200 text-xs transition-transform hover:scale-110 duration-300">
                  <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>Live</span>
            </a>
            <a :href="project['git-hub']"  target="_blank" class="bg-white  px-3 py-1 text-black rounded-sm shadow-md text-xs flex items-center space-x-1 transition-transform hover:scale-110 duration-300">
                <img  src="../assets/img/github-icon.png" class="w-4 h-4" alt="">
                <span>Github</span>
            </a>
        </div>
    </div>
</template>

<script setup>
defineProps({
    projects : Object,
})
function getImgUrl(pic) {
    return new URL(`../assets/img/${pic}`, import.meta.url).href
}
</script>
