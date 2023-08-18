import React from "react";
import './Sidebar.scss';


export default function Sidebar() {
    const navRef = React.useRef(null);
    const onToggleClick = (e) => {
        navRef.current.classList.toggle("collapsed");
    };

 
  

    return (
    <div className='side-bar' ref={navRef}>
        <span onClick={onToggleClick} className="toggle-sidebar">
            <span className="material-symbols-outlined">navigate_next</span>
        </span>
        <div className='logo-wrp'>
            <span className="material-symbols-outlined f-36 logo">offline_bolt</span>
            <div className='logo-txt'>
            <span className='f-16'>ProductsKart</span>
            <div className='sub-txt f-12'>Thu Jan 16</div>
            </div>
        </div>
        <div className='filter-section'>
            <span className="material-symbols-outlined f-32 burger-img">lunch_dining</span>
            <div className='prod-text'>
            <span className='sub-txt f-12'>Menu</span>
            <div><strong className='f-20'>Burger</strong></div>
            </div>
            <div className='filter-link'>
            <span className="material-symbols-outlined f-16">tune</span>
            <span className='f-12'>Filter</span>
            </div>

        </div>
        <div className="nav-wrp">

            <nav>
                <div className='nav-title'>
                MENU DASHBOARD
                <span className="material-symbols-outlined f-20">more_horiz</span>
                </div>
                <ul>
                    <li><a href='#.' className='active'><span className="material-symbols-outlined">empty_dashboard</span> Dashboard</a></li>
                    <li><a href='#.'><span className="material-symbols-outlined">summarize</span> Menus <em>New</em></a></li>
                    <li><a href='#.'><span className="material-symbols-outlined">timer</span> History</a></li>
                    <li><a href='#.'><span className="material-symbols-outlined">wallet</span> Wallet</a></li>
                    <li><a href='#.'><span className="material-symbols-outlined">heap_snapshot_large</span> Promotion <em>12 +</em></a></li>
                </ul>
            </nav>

            <nav>
                <div className='nav-title'>
                GENERAL
                <span className="material-symbols-outlined f-20">more_horiz</span>
                </div>
                <ul>
                    <li><a href='#.' className=''><span className="material-symbols-outlined">settings</span> Setting</a></li>
                    <li><a href='#.'><span className="material-symbols-outlined">reviews</span> Give Ratings</a></li>
                </ul>
            </nav>
        </div>
        
                
        </div>

    );
}