export const constantRoute=[
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/404/index.vue')
    },
    {
      path: '/:pathMathc(.*)*',
      name: 'any',
      redirect:'404'
    },
  ]