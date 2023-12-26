import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { loadMicroApp } from 'qiankun';
import './App.css';
import { useEffect } from 'react';

function App() {
  function goto(num) {
    console.log(num,'=============================')
    window.history.pushState(null, `/app${num}`, `/app${num}`)
    // window.history.push( `/app${num}`)
  }
  // useEffect(()=>{
  //   loadMicroApp({
  //     name: 'app1',
  //     entry: 'http://localhost:3001',
  //     container: '#viewport',
  //   });
  // },[])
  return (
    // <div className="App">
    //   <header className="App-header">
       
    //     <span  onClick={()=>{goto(1)}}>应用1</span>
    //     <span  onClick={()=>{goto(2)}}>应用2</span>
       
    //   </header>
    //   <div id="subapp-viewport"></div>
    // </div>
    
    <Router>
    <div>
      <nav>
        {/* 在主应用中通过 Link 触发路由跳转 */}
        <Link to="/app1">Go to App 1</Link>
        <Link to="/app2">Go to App 2</Link>
        {/* 其他微应用的链接 */}
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
