import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start,setDefaultMountApp } from 'qiankun';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// 定义loader方法，loading改变时，将变量赋值给App.vue的data中的isLoading
// function loader (loading) {
//   if (instance && instance.$children) {
//     // instance.$children[0] 是App.vue，此时直接改动App.vue的isLoading
//     instance.$children[0].isLoading = loading
//   }
// }

// 注册子应用
registerMicroApps([
  {
    name: 'app1',
    entry: 'http://localhost:3001',
    container: '#viewport',
    activeRule: '/app1',
    props: {
      routerBase: '/app1', // 下发基础路由
      // getGlobalState: store.getGlobalState // 下发getGlobalState方法
    },
    // loader
  },
  {
    name: 'app2',
    entry: 'http://localhost:3002',
    container: '#viewport',
    activeRule: '/app2',
    props: {
      routerBase: '/app2', // 下发基础路由
      // getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  },
],{
  beforeLoad: app => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    }
  ],
  afterMount: [
    app => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
    }
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    }
  ]
});

setDefaultMountApp('app1')
// 启动 qiankun
start();