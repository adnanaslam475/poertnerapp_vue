export default [
  {
    path: "/commercial",
    name: "Commercial",
    component: () => import("./pages/index"),
  },
  {
    path: "/corporate",
    name: "Corporate",
    component: () => import("./pages/corporate"),
  },
]
