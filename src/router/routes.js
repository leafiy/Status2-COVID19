
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'support', component: () => import('pages/Supporter.vue') },
      { path: 'datenschutz', component: () => import('pages/Datenschutz.vue') },
      { path: 'lizenz', component: () => import('pages/Lizenz.vue') },
      { path: 'anmelden', component: () => import('pages/Anmelden.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
