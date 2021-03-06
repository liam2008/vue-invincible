import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index')
    }]
  },

  /* {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: _import('home/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: _import('home/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: _import('home/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  }, */

  // 路由和侧边栏关联
  {
    path: '/personManage',
    component: Layout,
    name: 'PersonManage',
    meta: { title: '人事管理', icon: 'geren' },
    redirect: 'department',
    children: [
      {
        path: 'department',
        component: _import('personManage/department/layout'),
        children: [
          {
            path: 'index',
            name: 'Department',
            component: _import('personManage/department/index'),
            meta: { title: '部门管理', icon: 'tipsdepartmentup' }
          },
          // 人事管理
          {
            path: 'add',
            name: 'departmentAdd',
            noredirect: true,
            hidden: true,
            component: _import('personManage/department/add')
          },
          {
            path: 'edit',
            name: 'departmentEdit',
            noredirect: true,
            hidden: true,
            component: _import('personManage/department/edit')
          },
          {
            path: 'delete',
            name: 'departmentDelete',
            noredirect: true,
            hidden: true,
            component: _import('personManage/department/delete')
          }
        ]
      },
      {
        path: 'post',
        name: 'Post',
        component: _import('personManage/post/index'),
        meta: { title: '岗位管理', icon: 'post' }
      },
      {
        path: 'personnel',
        name: 'Personnel',
        component: _import('personManage/personnel/index'),
        meta: { title: '人员管理', icon: 'user' }
      }
    ]
  }
  // { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

