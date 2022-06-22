<script setup>
import Link from './Link.vue'
</script>

<template>
    <div class="md:col-span-3 col-span-full">
        <!-- img -->
        <div class="">
            <img class="md:h-52  md:w-52 w-full rounded-md shadow-sm" src="../assets/img/my-imgjpg.jpg" alt="">
            <div class="text-xl mt-3 text-center md:text-left">Swan Pyae Sone</div>
        </div>
        <!-- links -->
        <div class="mt-10 ml-16 hidden md:block">
            <Link></Link>
        </div>
    </div>
</template>