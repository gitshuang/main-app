import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';

function App() {
  

  return (
    <Router>
    <div>
      <nav >
        {/* 在主应用中通过 Link 触发路由跳转 */}
        <NavLink to="/app1" className='link' >Go to App 1</NavLink>
        <NavLink to="/app2" >Go to App 2</NavLink>
      </nav>
      <hr />
      {/* 主应用中配置的路由规则 */}
      <Routes>
        <Route path="/app1"  />
        <Route path="/app2"  />
        {/* 其他微应用的路由规则 */}
      </Routes>
      <div id="viewport"></div>
    </div>
  </Router>
  );
}

export default App;
