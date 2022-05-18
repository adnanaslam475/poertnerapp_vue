// import Navbar from "../../components/navBar/navbar.vue"

export default [
  // {
  //   path: "/",
  //   name: "",
  //   component: Navbar,
  //   children: [
  //     {
  //       path: "/Leadership",
  //       name: "Leadership",
  //       component: () => import("./pages/index"),
  //     },
  //   ],
  // },
  {
    path: "/Leadership",
    name: "Leadership",
    component: () => import("./pages/index"),
  },
  {
    path: "/management-team",
    name: "managementTeam",
    component: () => import("./pages/managementTeam"),
  },
]
