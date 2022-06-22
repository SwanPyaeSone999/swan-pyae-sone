<template>
    <ul class="space-y-1">
        <li>
            <router-link to="/" active-class="md:border-l-2 md:border-yellow-500" class="hover-1  p-1" >About Me</router-link>
        </li>
        <li>
            <router-link to="/projects" active-class="md:border-l-2  md:border-yellow-500" class="hover-1 p-1">Projects</router-link>
        </li>
        <li>
            <router-link to="/contact" active-class="md:border-l-2 md:border-yellow-500" class="hover-1 p-1">Contact Me</router-link>
        </li>
    </ul>
</template>

<script >
   
</script>

<style scoped>
    a, a > span {
      position: relative;
      color: inherit;
      text-decoration: none;
      line-height: 24px;
    }
  
    a:before, a:after, a > span:before, a > span:after {
      content: '';
      position: absolute;
      transition: transform .5s ease;
    }
    .hover-1:before {
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: #492059;
      transform: scaleX(0);
    }
    .hover-1:hover::before {
        transform: scaleX(1);
    }
</style>