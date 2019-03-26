import {
  Home,
  ReactLongList,
  TypeScript,
  LifeCycle,
  ReactTime
} from '../view'


const routes = [
  { 
    path: '/',
    exact: true,
    component: Home
  },
  { 
    path: '/home',
    exact: true,
    component: Home
  },
  { 
    path: '/reactLongList',
    exact: true,
    component: ReactLongList,
  },
  { 
    path: '/typeScript',
    exact: true,
    component: TypeScript,
  },
  { 
    path: '/reactTime',
    exact: true,
    component: ReactTime,
  },
  { 
    path: '/lifeCycle',
    exact: true,
    component: LifeCycle,
  },
]

export default routes