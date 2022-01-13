import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

const Home = () => import('./components/Home.vue')
const About = () => import('./components/About.vue')
const Top20 = () => import('./components/Top20.vue')
const Signup = () => import('./components/Signup.vue')

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home },
  { path: '/', component: Home },
  { path: '/about/:id/:name', component: About },
  { path: '/top20', component: Top20 },
  { path: '/signup', component: Signup },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
