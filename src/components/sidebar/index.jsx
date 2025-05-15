import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/styles.css';
export const Sidebar = () => {

      const [isCollapsed, setIsCollapsed] = useState(() => {
        const savedState = localStorage.getItem('sidebarCollapsed');
        return savedState === 'true'; // Devuelve true si está comprimida, false si no
      });
    
       // Función para alternar el estado de la barra lateral (expandir/comprimir)
       const toggleSidebar = () => {
        const newState = !isCollapsed;
        setIsCollapsed(newState);
        localStorage.setItem('sidebarCollapsed', newState);
      };

  return (
    <div className={`${isCollapsed ? 'sidebar' : 'sidebar-hidden' } !z-30`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="41" height="45" viewBox="0 0 41 45" fill="none" className="comprimir-button" onClick={toggleSidebar}>
            <g filter="url(#filter0_dddd_57_471)">
              <circle cx="22" cy="18" r="17" fill={'#fff'}/>
              <path d="M25.937 26.511C26.3433 26.0141 26.2699 25.282 25.7731 24.8757L19.2854 19.57C18.879 19.2375 18.6458 18.7461 18.6458 18.2216C18.6458 17.6971 18.879 17.2056 19.2854 16.8732L25.7731 11.5674C26.9269 10.5544 25.5337 8.83567 24.3017 9.76827L17.814 15.074C15.84 16.6205 15.8393 19.8227 17.8141 21.3691L24.3017 26.6749C24.5176 26.8514 24.7779 26.9374 25.0367 26.9374C25.3733 26.9374 25.7073 26.7919 25.937 26.511Z" fill="black"/>
            </g>
            <defs>
              <filter id="filter0_dddd_57_471" x="0" y="0" width="41" height="45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="0.5"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_57_471"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-1" dy="2"/>
                <feGaussianBlur stdDeviation="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/>
                <feBlend mode="normal" in2="effect1_dropShadow_57_471" result="effect2_dropShadow_57_471"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-1" dy="4"/>
                <feGaussianBlur stdDeviation="1.5"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                <feBlend mode="normal" in2="effect2_dropShadow_57_471" result="effect3_dropShadow_57_471"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-2" dy="7"/>
                <feGaussianBlur stdDeviation="1.5"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
                <feBlend mode="normal" in2="effect3_dropShadow_57_471" result="effect4_dropShadow_57_471"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_57_471" result="shape"/>
              </filter>
            </defs>
          </svg>

          <div className='container-side-beta'>
            <img src="/images/logo-solo.png" className="logo-solo" />
          </div>

          <div className='content-sidebar'>
            <Link to="/dashboard" className={getSelectedLink("/dashboard")}>
              <img src={getSelectedSvg("/dashboard")} className="noselected-img" />
              <img src="/svg/sidebar/homehover.svg" className="selected-img" />
              <p className='textos-14-semibold content-siddebar-cel'>Home</p>
            </Link>
            <Link to="/news" className={getSelectedLink("/news")}>
              <img src={getSelectedSvg("/news")} className="noselected-img" />
              <img src="/svg/sidebar/newshover.svg" className="selected-img" />
              <p className='textos-14-semibold content-siddebar-cel'>News</p>
            </Link>
            <Link to="/scanner" className={getSelectedLink("/scanner")}>
              <img src={getSelectedSvg("/scanner")} className="noselected-img" />
              <img src="/svg/sidebar/scannerhover.svg" className="selected-img" />
              <p className='textos-14-semibold content-siddebar-cel'>Scanners</p>
            </Link>

            <div className="separator"></div>

          </div>

          <div className='separator-perfil'></div>

          <button className='h-[50px] gap-2 w-full flex justify-center items-center bg-transparent' onClick={logout}>
            <img src="/svg/sidebar/logout.svg" alt="" />
            <p className='blanco inter-14'>Cerrar Sesion</p>
          </button>
        </div>
  )
}

export default Sidebar;