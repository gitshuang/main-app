import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';

function App() {
  function goto(num) {
    console.log(num,'=============================')
    window.history.pushState(null, `/app${num}`, `/app${num}`)
  }

  return (
    <Router>
    <div>
      <nav >
        {/* 在主应用中通过 Link 触发路由跳转 */}
        <Link to="/app1" className='link'>Go to App 1</Link>
        <Link to="/app2">Go to App 2</Link>
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
