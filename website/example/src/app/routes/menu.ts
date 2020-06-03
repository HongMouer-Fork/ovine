import { LimitMenuItem } from '@core/routes/types'

export const menuRoutes: LimitMenuItem = {
  nodePath: '/',
  limitLabel: '侧边栏目录',
  label: '',
  children: [
    {
      path: '/',
      label: 'Dashboard',
      nodePath: 'dashboard',
      exact: true,
      pathToComponent: 'dashboard',
      sideVisible: false,
    },
    {
      label: '页面编辑',
      icon: 'fa fa-coffee',
      nodePath: 'start',
    },
    {
      label: 'DEMO应用',
      icon: 'fa fa-paint-brush',
      nodePath: 'application',
      children: [
        {
          label: '热更新管理',
          nodePath: 'hot',
        },
        {
          label: '文档管理',
          nodePath: 'doc',
        },
      ],
    },
    {
      label: '系统管理',
      icon: 'fa fa-wrench',
      nodePath: 'system',
      children: [
        {
          label: '管理员用户',
          nodePath: 'user_list',
        },
        {
          label: '管理员角色',
          nodePath: 'user_role',
        },
        {
          label: '系统操作日志',
          nodePath: 'user_log',
        },
      ],
    },
  ],
}
