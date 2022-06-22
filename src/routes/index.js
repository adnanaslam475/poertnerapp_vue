/* eslint-disable brace-style */
import Vue from "vue"
import VueRouter from "vue-router"
import ourStoryRoutes from "../modules/ourStory/route"
import PhilosophiesRoutes from "../modules/Philosophies/route"
import LeadershipRoutes from "../modules/Leadership/route"
import AirportsRoutes from "../modules/AirPorts/route"
import CommercialRoutes from "../modules/Commercial/route"
import PagesRoutes from "../modules/pages/route"

// import Navbar from "../components/navBar/navbar.vue"
// import verticalNavbar from "../components/navBar/verticalNavbar.vue"
import Home from '../modules/pages/pages/index.vue'
import Team from "../modules/Team/index.vue"

Vue.use(VueRouter)

console.log(...PagesRoutes)
const staticRoutes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/",
    name: "team",
    component: Team
  },
  // {
  //   path: "/team",
  //   name: "team",
  //   component: Team,
  // },
  ...PagesRoutes,
  ...ourStoryRoutes,
  ...CommercialRoutes,
  ...PhilosophiesRoutes,
  ...LeadershipRoutes,
  ...AirportsRoutes
  // {
  //   path: "/",
  //   name: "verticalNavbar",
  //   component: verticalNavbar,
  //   children: [
  //     ...ourStoryRoutes,
  //     ...CommercialRoutes,
  //     ...PhilosophiesRoutes,
  //     ...LeadershipRoutes,
  //     ...AirportsRoutes,
  //   ],
  // },
]

const routes = staticRoutes

const router = new VueRouter({
  mode: "hash",
  // base: process.env.BASE_URL,
  routes,
})

export default router
