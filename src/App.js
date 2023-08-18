import React from "react";

import './App.scss';

import Sidebar from './components/Sidebar/Sidebar';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';


function App() {
  const themeRef = React.useRef(null);
  const onToggleKey = (e) => {
      themeRef.current.classList.toggle("showDark");
  };


  return (
    
    <div className="container" ref={themeRef}>
      <Sidebar />
      <div className='page-container'>
        <Header />
        <div className='page-title-section'>
          <div className="page-title">
            <span className="material-symbols-outlined f-36">arrow_circle_left</span>
            <div className='title'>
              <strong className='f-24'>Hamburger</strong>
              <span className='sub-txt'>Discover whatever you need easily</span>
            </div>
          </div>
          <div className='breadcrumb'>
            <a href='#.'>MENUS</a>
            <span className="material-symbols-outlined f-12">navigate_next</span>
            <a href='#.'>FOOD</a><span className="material-symbols-outlined f-12">navigate_next</span>
            <a href='#.'>SUBFOOD</a><span className="material-symbols-outlined f-12">navigate_next</span>
            HAMBURGER
          </div>
        </div>

        <Shop />        
      </div>

      <div class="switch-button r" id="button-1">
            <span className="txt">
                <span className="mode">
                    <span class="material-symbols-outlined">
                        light_mode
                    </span>
                    LIGHT
                </span>
                <span className="mode">
                    <span class="material-symbols-outlined">
                        dark_mode
                    </span>
                    DARK
                </span>
            </span>
            <input type="checkbox" class="checkbox" onClick={onToggleKey} />
            <div class="knobs"></div>
            <div class="layer"></div>
      </div>
        
    </div>
  );
}

export default App;