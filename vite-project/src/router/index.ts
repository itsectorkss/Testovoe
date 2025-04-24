import { createRouter, createWebHistory } from 'vue-router'
import SelectionPage from '../views/SelectionPage.vue'
import ContactsPage from '../views/ContactsPage.vue'

const routes = [
  { path: '/', name: 'Home', component: SelectionPage },
  { path: '/contacts', name: 'Contacts', component: ContactsPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
