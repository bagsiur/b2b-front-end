import Cockpit from '../views/General/Cockpit.vue'
import Login from '../views/Login/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Cockpit',
    component: Cockpit
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

export default routes