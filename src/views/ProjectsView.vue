<template>
    <div>
        <div class="md:px-10 px-8 mx-auto grid grid-cols-12 mt-8 ">
            <!-- my-portfolio -->
            <MyPortfolio class="hidden md:block"/>

            <div class="md:col-span-9 col-span-full mb-10 md:mt-10 ">
                <h1 class="text-xl font-semibold border-b-2 inline-block  border-b-yellow-400">Projects</h1>
                <div class="flex justify-start mt-5 space-x-3">
                    <span>Filter - </span>
                    <filter-section class="hidden sm:inline-flex gap-4 "></filter-section>
                </div> 
                <filter-section class="block sm:hidden space-x-3 mt-3"></filter-section>
                <div v-if="projects" class="grid grid-cols-6 gap-4 mt-10">
                    <project-card :projects="projects"></project-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MyPortfolio  from '../components/MyPortfolio.vue'
import FilterSection  from '../components/FilterSection.vue'
import {useProject} from '../composable/useProject.js'
import {ref} from 'vue';
import ProjectCard from '../components/ProjectCard.vue';
const  {projects} = useProject(); 

</script>
