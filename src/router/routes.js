import { 
  Home, 
  MyCenter 
} from '../view'

const routes = [
  { path: '/',
    component: Home
  },
  { path: '/mycenter',
    component: MyCenter,
    routes: [
      { path: '/mycenter/coupon',
        component: MyCenter
      }
    ]
  }
]

export {
  routes
}