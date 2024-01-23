import React, { useState,useContext } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import { AiOutlineUser, AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { SiLoopback } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { AuthContext } from "../../Context";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import BusinessIcon from '@mui/icons-material/Business';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Groups3Icon from '@mui/icons-material/Groups3';
import PublicIcon from '@mui/icons-material/Public';

const SidebarAdmin = () => {

     const { auth, setAuth } = useContext(AuthContext);

  const menus = [
    { name: "Acceuil", link: "/", icon: AiOutlineHome },
    { name: "Tableau de bord", 
      link: "/admin/dashboard",
     icon: MdOutlineDashboard },
    {
      name: "Formations",
      link: "formations",
      icon: SchoolIcon,
    },
    { name: "Formateurs", 
    link: "formateurs", 
    icon: Groups3Icon 
    },
     {
      name: "Entreprise",
      link: "entreprises",
      icon: BusinessIcon,
    },

    { name: "Assistants", 
      link: "assistants", 
      icon: Diversity3Icon,
      margin: true, },
    {
      name: "Utilisateurs",
      link: "users",
      icon: PeopleAltIcon,
     
    },
   
    {
      name: "Catégorie",
      link: "categories",
      icon: FormatListNumberedIcon,
    },
     {
      name: "Villes",
      link: "villes",
      icon: PublicIcon
    },
          
    { name: "Déconnexion", link: "/logout", icon: HiOutlineLogout },
  ];
  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#f5f3fe] min-h-screen ${
          open ? "w-[13rem]" : "w-16"
        } duration-500 fixed px-4`}
      >
        <div
          className={`py-3 ${open && "justify-evenly  p-3"}  flex justify-end`}
        >
          <div
            className={`w-[16] center text-center mx-auto duration-300 ${
              open ? "block" : "hidden"
            }`}
          >
            <Avatar
              sx={{ bgcolor: deepOrange[500], width: 80, height: 80 }}
              className="mx-auto"
              src={
                auth.image
                  ? `data:image;base64,${auth.image}`
                  : "/image/main/person.jpeg"
              }
            >
              {auth.image === null &&
                auth?.firstName?.slice(0, 1)}
            </Avatar>
            <p className="mt-3  font-light uppercase">
              {auth.nom}
            </p>
          </div>
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <hr className={`duration-300 ${open === false && "hidden"}`} />
        <div className="mt-4  flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <React.Fragment key={i}>
              {menu?.link !== null ? (
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? console.log(" link is pending")
                      : isActive
                      ? ` ${
                          menu?.margin && "mt-5"
                        } group flex items-center text-sm  gap-3.5 font-medium p-2  shadow-md border shadow-orange-500 rounded-md`
                      : `${
                          menu?.margin && "mt-5"
                        } group flex items-center text-sm  gap-3.5 font-medium p-2 shadow-slate-400 shadow hover:shadow-md border hover:shadow-blue-500  rounded-md`
                  }
                  to={menu?.link}
                  key={i}
                >
                  <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                  <h2
                    style={{
                      transitionDelay: `${i + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {menu?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    {menu?.name}
                  </h2>
                </NavLink>
              ) : (
                /* menu?.link == null  */
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? console.log(" link is pending")
                      : isActive === false
                      ? ` ${
                          menu?.margin && "mt-5"
                        } group flex items-center text-sm  gap-3.5 font-medium p-2 bg-orange-400 rounded-md`
                      : `${
                          menu?.margin && "mt-5"
                        } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-orange-400 rounded-md`
                  }
                  to={menu?.link}
                  key={i}
                >
                  <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                  <h2
                    style={{
                      transitionDelay: `${i + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {menu?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    {menu?.name}
                  </h2>
                </NavLink>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default  SidebarAdmin