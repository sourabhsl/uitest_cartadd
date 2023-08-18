import React from "react";
import "./Header.scss"


function Header() {
  const topmenuRef = React.useRef(null);
  const onToggleMenu = (e) => {
    topmenuRef.current.classList.toggle("showMenu");
  };
  const onHideMenu = (e) => {
    topmenuRef.current.classList.remove("showMenu");
  };
  

  const shareRef = React.useRef(null);
  const onToggleShareMenu = (e) => {
    shareRef.current.classList.toggle("open");
  };
  const onHideShareMenu = (e) => {
    shareRef.current.classList.remove("open");
  };

  return (
    <div className='search-panel'>
          <div className='search-box'>
            <span className="material-symbols-outlined prepend">search</span>
            <input type='text' placeholder='Search menu ...' size={20} />
            <em className='apend'><span className="material-symbols-outlined">filter_vintage</span></em>
          </div>
          
          <span class="material-symbols-outlined nav-links-menu" onClick={onToggleMenu}>menu</span>
          <div className="nav-links" ref={topmenuRef}>
            <a href='#.' className='btn btn-link' onClick={onHideMenu}>
              <span className="material-symbols-outlined">contact_support</span>
              Chat
            </a>
            <a href='#.' className='btn btn-link' onClick={onHideMenu}>
              <span className="material-symbols-outlined">apps</span>
              More
            </a>
            <div className="dd-wrp">
              <a href='#.' className='btn btn-outline' onClick={onToggleShareMenu}>
                <span className="material-symbols-outlined">communities</span>
                Share
              </a>
              <div className="dropdown" ref={shareRef}>
                <a href="#." class="btn btn-link" onClick={onHideShareMenu}><span class="material-symbols-outlined">counter_2</span>Facebook</a>
                <a href="#." class="btn btn-link" onClick={onHideShareMenu}><span class="material-symbols-outlined">counter_4</span>WhatsApp</a>
                <a href="#." class="btn btn-link" onClick={onHideShareMenu}><span class="material-symbols-outlined">counter_6</span>Twitter</a>
                <a href="#." class="btn btn-link" onClick={onHideShareMenu}><span class="material-symbols-outlined">counter_8</span>Gmail</a>
              </div>
            </div>
            <a href='#.' className='btn btn-solid' onClick={onHideMenu}>
              <span className="material-symbols-outlined f-36">border_color</span>
              Your Notes
            </a>
          </div>
        </div>
  );
}

export default Header;