import Loadable from 'react-loadable'
import { Loading } from 'components'

export const LoadableComponent = (pathCom) => {
  return Loadable({
    loader: () => import(`../../src/view/${pathCom}`),
    loading: Loading
  })
}

export const routes = [
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
    component: LoadableComponent('ReactTime'),
  },
  { 
    path: '/lifeCycle',
    exact: true,
    component: LoadableComponent('LifeCycle'),
  },
  {
    path: '/httpCache',
    exact: true,
    component: LoadableComponent('HttpCache'),
  },
  {
    path: '/reactBasic',
    exact: true,
    component: LoadableComponent('ReactBasic')
  }
]

export const homeRouterMap = [
  {
    'name': 'react生命周期',
    'path': 'LifeCycle'
  },
  {
    'name': 'react长列表优化',
    'path': 'reactLongList'
  },
  {
    'name': 'react TypeScript实践',
    'path': 'reactLongList'
  },
  {
    'name': 'react setState Props实践',
    'path': 'reactTime'
  },
  {
    'name': 'http缓存',
    'path': 'httpCache'
  },
  {
    'name': 'react 基础',
    'path': 'reactBasic'
  }
]