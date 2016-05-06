import Vue from 'vue'
import VueRouter from 'vue-router'
import { configRouter } from './router-config'

Vue.use(VueRouter)

const router = new VueRouter({history: true, saveScrollPosition: true})

configRouter(router)

const App = Vue.extend(require('./App'))
router.start(App, '#app')
