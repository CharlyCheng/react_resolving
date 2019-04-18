import {
  Home,
  ReactLongList,
  TypeScript,
  LifeCycle,
  ReactTime,
  HttpCache,
  ReactBasic
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
  {
    path: '/httpCache',
    exact: true,
    component: HttpCache,
  },
  {
    psth: '/reactBasic',
    exact: true,
    component: ReactBasic,
  }
]

export default routes