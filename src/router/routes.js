import React  from 'react'
import Loadable from 'react-loadable'
import { Loading } from '@src/component'

export const LoadableComponent = (pathCom) => {
  return Loadable({
    loader: () => import(`../../src/view/${pathCom}`),
    loading: Loading
  })
}


const routes = [
  { 
    path: '/',
    exact: true,
    component: LoadableComponent('Home')
  },
  { 
    path: '/home',
    exact: true,
    component: LoadableComponent('Home')
  },
  { 
    path: '/reactLongList',
    exact: true,
    component: LoadableComponent('ReactLongList'),
  },
  { 
    path: '/typeScript',
    exact: true,
    component: LoadableComponent('TypeScript'),
  },
  { 
    path: '/reactTime',
    exact: true,
    component: LoadableComponent('TypeScript'),
  },
  { 
    path: '/lifeCycle',
    exact: true,
    component: LoadableComponent('TypeScript'),
  },
  {
    path: '/httpCache',
    exact: true,
    component: LoadableComponent('HttpCache'),
  },
  {
    psth: '/reactBasic',
    exact: true,
    component: LoadableComponent('HttpCache')
  }
]



export default routes