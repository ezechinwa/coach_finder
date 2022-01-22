import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import NotFound from "@/components/pages/NotFound";
import Requests from "@/components/pages/requests/Requests";
import CoachesList from "@/components/pages/coaches/CoachesList";
import CoachDetails  from '@/components/pages/coaches/CoachDetails'
import ContactCoach from "@/components/pages/requests/ContactCoach";
import CoachRegistration from "@/components/pages/coaches/CoachRegistration";

const routes = [
  {
    path: '/',
    redirect: '/coaches'
  },
  {
    path: '/coaches',
    component: CoachesList
  },
  {
    path: '/coaches/:id',
    component: CoachDetails,
    children: [
      {path:'contact', component: ContactCoach} //coaches/1/contact
    ],
  },
  {
    path: '/register',
    component: CoachRegistration
  },
  {
    path: '/request',
    component: Requests
  },
  {
    path: '/:notFound(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
