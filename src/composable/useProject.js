import { ref } from "vue";

export function useProject() {
    const projects = ref([
        {pjname : 'proton-landingpage', type : 'tailwind',  asset :  'proton.png' , live : 'https://proton-landing.netlify.app', 'git-hub' : 'https://github.com/SwanPyaeSone999/proton-landing' },
        {pjname : 'vue-todo-animation', type : 'vue',  asset : 'vue-animation.png' , live : 'https://vue-todo-animation.netlify.app', 'git-hub' : 'https://github.com/SwanPyaeSone999/vue-todo' },
        {pjname : 'qoals-landingpage', type : 'tailwind',  asset : 'qoals.png' , live : 'https://qoals-landing.netlify.app', 'git-hub' : 'https://github.com/SwanPyaeSone999/qoals-landing'  },
        {pjname : 'timecraft-landingpage', type : 'tailwind',  asset : 'timecraft.png', live : 'https://timecraft-landing-clone.netlify.app', 'git-hub' : 'https://github.com/SwanPyaeSone999/timecraft-landing-clone'},
        {pjname : 'halloween-landingpage', type : 'tailwind',  asset : 'halloween.png',  live : 'https://halloween-landing.netlify.app', 'git-hub' : 'https://github.com/SwanPyaeSone999/halloween-items'  },
        {pjname : 'calculator-vue', type : 'vue',  asset : 'calculator.png' ,live : 'https://vue-calculator-demo.netlify.app', 'git-hub' : ''  },
        {pjname : 'vue-shop-mini', type : 'vue',  asset : 'vue-shop.png' , live : 'https://vue-shop-mini.netlify.app', 'git-hub' : 'https://github.com/SwanPyaeSone999/vue-shop-mini'},
        {pjname : 'christmas-gift-landingpage', type : '',  asset : 'christmas-gift.png' , live : 'https://christmas-gift-landing.vercel.app', 'git-hub' : 'https://github.com/SwanPyaeSone999/christmas-gift-landing' },
        {pjname : 'ecolu-booksale-landingpage', type : 'bootstrap',  asset : 'ecolu-booksale.png' ,live : 'https://ecolu-booksale.vercel.app', 'git-hub' : 'https://github.com/SwanPyaeSone999/ecolu-booksale'  },
        {pjname : 'health-care-landingpage', type : 'bootstrap',  asset : 'health-care.png', live : 'https://health-care-landing.vercel.app', 'git-hub' : 'https://github.com/SwanPyaeSone999/health-care'   },
        {pjname : 'admin-dashboard', type : 'bootstrap',  asset : 'admin-dashboard.png' ,  live : 'https://admin-dashboard-sample.vercel.app', 'git-hub' : 'https://github.com/SwanPyaeSone999/admin-dashboard' },
        {pjname : 'personal-portfolio-template', type : 'bootstrap',  asset : 'personal-portfolio.png' , live : 'https://personal-portfolio-template.vercel.app', 'git-hub' : 'https://github.com/SwanPyaeSone999/personal-portfolio-template'  },
        {pjname : 'samplelandingpage', type : 'bootstrap',  asset : 'samplelanding.png', live : 'https://sample-landing-page-one.vercel.app', 'git-hub' : 'https://github.com/SwanPyaeSone999/sample-landing-page'   },
        {pjname : 'lara-movie-app', type : 'laravel',  asset : 'lara-movie-app.png', live : 'https://laravel-movie-app.vercel.app', 'git-hub' : 'https://github.com/SwanPyaeSone999/movie-app-demo'  },
        {pjname : 'vue-lara-movie-app', type : 'laravel',  asset : 'vue-lara-movie-app.png'  },
    ]);
    return { projects, }
  }