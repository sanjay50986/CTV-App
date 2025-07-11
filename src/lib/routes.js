import  Home from '../pages/Home';
import Details from '../pages/Details'

export default {
  root: 'home',
  routes: [
    {
      path: 'home',
      component: Home,
    },
    {
      path: 'details',
      component: Details
    }
  ]
}