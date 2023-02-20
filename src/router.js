
import { createRouter, createWebHistory,createWebHashHistory} from 'vue-router'
import Home from '@/pages/HomePage.vue'

const routers = createRouter({
  history: createWebHistory(),createWebHashHistory,
  routes:[
    {path: '/', name: 'home', component:Home},
    {path: '/about', name: 'about', component:()=>import('@/pages/About.vue')},
    {path: '/portfolio', name: 'portfolio', component:()=>import('@/pages/Portfolio.vue')},
    {path: '/contact', name: 'contact', component:()=>import('@/pages/Contact.vue')},
    {path: '/blog', name: 'blog', component:()=>import('@/pages/Blog.vue')}
  ]
})

export default routers
