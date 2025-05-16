import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/styles.css';
export const Sidebar = () => {

      const getSelectedLink = (path) => {
        switch (path) {
          case '/dashboard':
            return location.pathname === path ? "selected-content" : "";
          case '/transactions':
            return location.pathname === path ? "selected-content" : "";
          case '/users':
            return location.pathname === path ? "selected-content" : "";
          case '/folders':
            return location.pathname === path ? "selected-content" : "";
          case '/tasks':
            return location.pathname === path ? "selected-content" : "";
          case '/reports':
            return location.pathname === path ? "selected-content" : "";
          case '/team':
            return location.pathname === path ? "selected-content" : "";
          case '/contacts':
            return location.pathname === path ? "selected-content" : "";
          case '/properties':
            return location.pathname === path ? "selected-content" : "";
          case '/funnel':
            return location.pathname === path ? "selected-content" : "";
          default:
            return "";
        }
      };

      const getSelectedSvg = (path) => {
        switch (path) {
          case '/dashboard':
            return location.pathname === path ? "/svg/sidebar/dashboard.svg" : "/svg/sidebar/dashboard.svg";
          case '/transactions':
            return location.pathname === path ? "/svg/sidebar/transacciones.svg" : "/svg/sidebar/transacciones.svg";
          case '/users':
            return location.pathname === path ? "/svg/sidebar/usuarios.svg" : "/svg/sidebar/usuarios.svg";
          case '/folders':
            return location.pathname === path ? "/svg/sidebar/archivos.svg" : "/svg/sidebar/archivos.svg";
          case '/tasks':
            return location.pathname === path ? "/svg/sidebar/tareas.svg" : "/svg/sidebar/tareas.svg";
          case '/reports':
            return location.pathname === path ? "/svg/sidebar/reportes.svg" : "/svg/sidebar/reportes.svg";
          case '/team':
            return location.pathname === path ? "/svg/sidebar/team.svg" : "/svg/sidebar/team.svg";
          case '/contacts':
            return location.pathname === path ? "/svg/sidebar/contactos.svg" : "/svg/sidebar/contactos.svg";
          case '/properties':
            return location.pathname === path ? "/svg/sidebar/propiedades.svg" : "/svg/sidebar/propiedades.svg";
          case '/funnel':
            return location.pathname === path ? "/svg/sidebar/embudo.svg" : "/svg/sidebar/embudo.svg";
          default:
            return "";
        }
      };

      const logout =  () => {
          localStorage.removeItem('authResponse');
          localStorage.clear();
          disconnectSocket();
          window.location.href = '/'
      }

  return (
    <div className={`sidebar`}>

          <div className='pl-[30px] pb-[90px]'>
            <img src="/images/logo-horizontal.png" className="w-[207px]" />
          </div>

          <div className='content-sidebar'>
            <Link to="/dashboard" className={getSelectedLink("/dashboard")}>
              <img src={getSelectedSvg("/dashboard")} className="w-[17px]" />
              <p className='inter-18'>Dashboard</p>
            </Link>

            <Link to="/transactions" className={getSelectedLink("/transactions")}>
              <img src={getSelectedSvg("/transactions")} className="w-[17px]" />
              <p className='inter-18'>Transacciones</p>
            </Link>

            <Link to="/users" className={getSelectedLink("/users")}>
              <img src={getSelectedSvg("/users")} className="w-[17px]" />
              <p className='inter-18'>Usuarios</p>
            </Link>
            
            <Link to="/folders" className={getSelectedLink("/folders")}>
              <img src={getSelectedSvg("/folders")} className="w-[17px]" />
              <p className='inter-18'>Archivos</p>
            </Link>

            <Link to="/tasks" className={getSelectedLink("/tasks")}>
              <img src={getSelectedSvg("/tasks")} className="w-[17px]" />
              <p className='inter-18'>Tareas</p>
            </Link>

            <Link to="/reports" className={getSelectedLink("/reports")}>
              <img src={getSelectedSvg("/reports")} className="w-[17px]" />
              <p className='inter-18'>Reportes</p>
            </Link>

            <Link to="/team" className={getSelectedLink("/team")}>
              <img src={getSelectedSvg("/team")} className="w-[17px]" />
              <p className='inter-18'>Equipo de trabajo</p>
            </Link>

            <Link to="/contacts" className={getSelectedLink("/contacts")}>
              <img src={getSelectedSvg("/contacts")} className="w-[17px]" />
              <p className='inter-18'>Contactos</p>
            </Link>

            <Link to="/properties" className={getSelectedLink("/properties")}>
              <img src={getSelectedSvg("/properties")} className="w-[17px]" />
              <p className='inter-18'>Propiedades</p>
            </Link>

            <Link to="/funnel" className={getSelectedLink("/funnel")}>
              <img src={getSelectedSvg("/funnel")} className="w-[17px]" />
              <p className='inter-18'>Embudo</p>
            </Link>
          </div>

          <div className='h-[1px] bg-[#EAEAEA] mx-[38px]'></div>

          <button className='h-[120px] pl-[30px] gap-2 w-full flex justify-start items-center bg-transparent' onClick={logout}>
            <img src="/svg/sidebar/logout.svg" alt="" />
            <p className='rojo inter-20'>Cerrar Sesion</p>
          </button>

          <img src="/images/marca-de-agua.png" className="ml-[30px] w-[213px]" />
        </div>
  )
}

export default Sidebar;