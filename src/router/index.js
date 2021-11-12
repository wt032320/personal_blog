import { createRouter, createWebHistory } from 'vue-router'

function beforeEnter (to, from, next) {
  if (localStorage.getItem("token"))
    next();
  else {
    next({
      path: "/admin"
    })
  }
}

const routes = [
  {
    path: '/',
    name: 'menteor',
    redirect: '/page'
  },
  {
    path: '/page',
    name: 'page',
    redirect: '/page/home',
    component: () => import('../components/layout/Page.vue'),
    children: [
      {
        // 主页
        path: 'home',
        name: 'home',
        component: () => import('../views/page/home/Home.vue')
      },
      {
        // 博客页
        path: 'blog',
        name: 'blog',
        redirect: '/page/blog/list',
        component: () => import('../views/page/blog/Blog.vue'),
        children: [
          {
            path: 'list',
            name: 'list',
            component: () => import('../views/page/blog/ListWrap.vue')
          },
          {
            path: 'details/:id',
            name: 'details',
            component: () => import('../views/page/blog/DetailsWrap.vue')
          }
        ]
      },
      {
        // 记录页
        path: 'record',
        name: 'record',
        component: () => import('../views/page/record/Record.vue')
      },
      {
        // 联系页
        path: 'contact',
        name: 'contact',
        component: () => import('../views/page/contact/Contact.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/manage/Index.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next({
          path: '/managehome'
        })
      } else {
        next()
      }
    },
  },
  {
    path: '/managehome',
    name: 'managehome',
    component: () => import('../views/manage/Home.vue'),
    redirect: '/managehome/create',
    children: [
      {
        path: 'create',
        name: 'create',
        component: () => import('../views/manage/BlogCreate.vue'),
        beforeEnter,
      },
      {
        path: 'manage',
        name: 'manage',
        component: () => import('../views/manage/BlogManage.vue'),
        beforeEnter,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
