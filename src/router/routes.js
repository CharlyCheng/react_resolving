import Loadable from 'react-loadable'
import { Loading } from 'components'

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
    psth: '/reactBasic',
    exact: true,
    component: LoadableComponent('ReactBasic')
  }
]



export default routes