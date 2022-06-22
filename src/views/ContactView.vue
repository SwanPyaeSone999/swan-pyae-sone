<script setup>
import MyPortfolio  from '../components/MyPortfolio.vue'
</script>

<template>
    <div class="px-12 grid grid-cols-12 mt-8 ">
        <!-- my-portfolio -->
        <MyPortfolio/>

        <div class="md:col-span-8 col-span-full mt-10 relative">
            <h1 class="text-xl font-semibold border-b-2 inline-block  border-b-yellow-400">Contact Me</h1>
            <div class="flex md:flex-row flex-col   gap-8 mt-5">
                <div>
                    <p class="mt-5">
                        Name - Swan Pyae Sone
                     </p>
                     <p class="mt-3">
                        swanpyae.sone318@gmail.com
                     </p>
                     <p class="mt-3">
                        Phone - 09770545294
                     </p>
                     <p class="mt-3">
                        Address - Yangon
                     </p>
                    <div class="flex space-x-3 mt-5">
                        <a href="https://www.facebook.com/swan.p.lay.3"><img class="w-5 h-5" src="../assets/img/icons8-facebook-30.png" alt=""></a>
                        <a href="https://github.com/SwanPyaeSone999"><img class="w-5 h-5" src="../assets/img/icons8-github-24.png" alt=""></a>
                    </div>
                </div>
                <div class="mb-10">
                    <input type="text" class="border-b mb-8 w-full border-black focus:outline-none bg-gray-50 placeholder:text-black" placeholder="Name">
                    <input type="text" class="border-b mb-8 w-full border-black focus:outline-none bg-gray-50 placeholder:text-black" placeholder="Email">
                    <textarea name="" id="" cols="5" rows="3" class="border-b mb-8 w-full border-black focus:outline-none bg-gray-50 placeholder:text-black" placeholder="Say Something!"></textarea>
                    <div class="group">
                        <button class=" border space-x-1 flex items-center border-black text-black px-6 py-1 group-hover:bg-black group-hover:text-white transition-all ease-in-out duration-150">
                            <span>Send</span>
                            <svg class="w-3 h-3 transform group-hover:rotate-90 transition-transform duration-300  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</template>