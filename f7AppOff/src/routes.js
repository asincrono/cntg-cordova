export default [
  {
    path: '/about/',
    component: require('./assets/vue/pages/about.vue')
  },
  {
    path: '/form/',
    component: require('./assets/vue/pages/form.vue')
  },
  {
    path: '/login/',
    component: require('./assets/vue/pages/login.vue')
  },
  {
    path: '/register/',
    component: require('./assets/vue/pages/register.vue')
  },
  {
    path: '/prices/',
    component: require('./assets/vue/pages/prices.vue')
  },
  {
    path: '/forgot_pass/',
    component: require('./assets/vue/pages/forgotPass.vue')
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: require('./assets/vue/pages/dynamic-route.vue')
  }
]
