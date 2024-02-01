import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarFormateur from './SidebarFormateur';

export default function FormateurDashboard() {
  return (
    <div className='h-[100vh] bg-slate-50 flex'>
      <div className="flex-none w-52">
        {" "}
        <SidebarFormateur />
      </div>
      <div className="grow bg-slate-100 min-h-[88vh]"> {/* mettre par défaut les Outlet a min-h-[93vh] et dans les Outlet ne pas faire des min-h[...] sinon ne pas dépasser 93vh dans les Outlets */}
        <Outlet />
      </div>
    </div>
  );
}
