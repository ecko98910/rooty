import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <summary>myproject</summary>
        <div className="folder">
          <p>app.py</p>
          <p>package.json</p>
          <summary>static</summary>
          <div className="folder">
            <summary>css</summary>
            <div className="folder">
              <p>index.css</p>
              <p>template.css</p>
            </div>
            <summary>js</summary>
            <div className="folder">
              <p>index.js</p>
              <p>jquery-min.js</p>
            </div>
            <summary>img</summary>
            <div className="folder">
              <p>banner.png</p>
              <p>foo.png</p>
            </div>
          </div>
          <summary>templates</summary>
          <div className="folder">
            <p>index.html</p>
            <p>template.html</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
