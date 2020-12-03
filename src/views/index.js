import React from 'react'
import loadable from '@loadable/component'

import TestForm from './study/TestForm'
import NameForm from './study/NameForm'
import Calculator from './study/BoilingVerdict'
import TestLift from './study/TestLift'
import TestLang from './study/TestLang'
import TestCombine from './study/TestCombine'
import TestContext from './study/TestContext'
import TestHOC from './study/TestHOC'
import TestHooks from './study/TestHooks'
import TestType from './study/TestType'

import MusicList from './music/MusicList'
import MusicDetail from './music/MusicDetail'

const TestJsx = loadable(() => import('./study/TestJsx'))
const TestProps = loadable(() => import('./study/TestProps'))
const TestEvent = loadable(() => import('./study/TestEvent'))
const TestRender = loadable(() => import('./study/TestRender'))
const TestList = loadable(() => import('./study/TestList'))
const ToDoList = loadable(() => import('./todo/ToDoList'))
const Antd=loadable(()=>import('./antd/Antd'))
const routes = [
  {
    id:10,
    text:'React学习',
    icon:'',
    children:[
      {
        id: 1010,
        text: 'JXS入门',
        component: TestJsx,
        path: '/jsx'
      }, {
        id: 1011,
        text: 'Props属性',
        component: TestProps,
        path: '/props'
      }, {
        id: 1012,
        text: '事件',
        component: TestEvent,
        path: '/event'
      }, {
        id: 1013,
        text: '显隐',
        component: TestRender,
        path: '/render'
      }, {
        id: 1014,
        text: '列表渲染',
        component: TestList,
        path: '/list'
      }, {
        id: 1015,
        text: '表单',
        component: TestForm,
        path: '/form'
      }, {
        id: 1016,
        text: '表格',
        component: NameForm,
        path: '/name'
      }, {
        id: 1017,
        text: '计算',
        component: Calculator,
        path: '/calculate'
      }, {
        id: 1018,
        text: '状态提升',
        component: TestLift,
        path: '/lift'
      }, {
        id: 1019,
        text: '状态栏',
        component: TestLang,
        path: '/lang'
      }, {
        id: 1020,
        text: '组合',
        component: TestCombine,
        path: '/combine'
      }, {
        id: 1021,
        text: '上下文',
        component: TestContext,
        path: '/context'
      }, {
        id: 1022,
        text: '高阶组件',
        component: TestHOC,
        path: '/hoc'
      }, {
        id: 1023,
        text: 'Hooks',
        component: TestHooks,
        path: '/hook'
      }, {
        id: 1024,
        text: '类型校验',
        component: TestType,
        path: '/type'
      }
    ]
  },
  {
    id:11,
    text:'音乐管理',
    icon:'',
    children:[
      {
        id: 1110,
        text: '音乐列表',
        component: MusicList,
        path: '/music',
        children: [{
          id: 111010,
          text: '音乐详情',
          component: MusicDetail,
          path: '/music/detail/:id/:name'
        }],
        notExact: true
      },{
        id: 1111,
        text: 'TodoList',
        component: ToDoList,
        path: '/todo'
      }
    ]
  },
  {
    id:12,
    text:'Antd学习',
    icon:'',
    children:[
      {
        id: 1210,
        text: '使用Antd',
        component: Antd,
        path: '/antd'
      }
    ]
  }
]

export default routes
