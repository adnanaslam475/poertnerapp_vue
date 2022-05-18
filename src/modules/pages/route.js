export default [
  {
    path: "/",
    name: "Home",
    component: () => import("./pages/index"),
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import("./pages/contactUs"),
  },
]
