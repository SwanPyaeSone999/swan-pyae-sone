<script setup>
import MyPortfolio  from '../components/MyPortfolio.vue'
</script>


<template>
    <div>
        <div class="px-12 grid grid-cols-12 mt-8 ">
            <!-- my-portfolio -->
            <MyPortfolio/>

            <div class="md:col-span-8  col-span-full mb-10 md:mt-20 mt-10">
                <h1 class="text-xl font-semibold border-b-2 inline-block  border-b-yellow-400">About Me</h1>
                <p class="mt-10 leading-loose">
                    Hey! I am Swan Pyae Sone who is learnig web development and enjoy about coding.
                    I starts coding about 18 years olds.
                    Currently learning Programming & Japanese Courses at <a class="text-indigo-500" href="http://metro-myanmar.com/mic/" >
                    Metro IT & Japanese Language Center .</a>
                </p>
            </div>
        </div>
    </div>
</template>

<style>

</style>
