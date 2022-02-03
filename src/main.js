import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min.js'
import Loader from '@/components/Loader'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import Vuelidate from 'vuelidate'
import VueMeta from 'vue-meta'
import messagePlugin from '@/utils/messages.plugin'
import dateFilter from '@/filters/date.filter'
import Paginate from 'vuejs-paginate'
Vue.component('Paginate', Paginate)
Vue.filter('date', dateFilter)
Vue.component('Loader', Loader)
Vue.use(Vuelidate)
Vue.use(messagePlugin)

Vue.use(VueMeta)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: 'AIzaSyCQwaG6LhvuaobXclUvcSsEeWb_i2ZPUyU',

  authDomain: 'vue-voting-c0358.firebaseapp.com',
  projectId: 'vue-voting-c0358',
  storageBucket: 'vue-voting-c0358.appspot.com',
  messagingSenderId: '279036913071',
  appId: '1:279036913071:web:19bd41269dc8890c8e3b5a',
  measurementId: 'G-FRG8RVC3YH'
})
let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
