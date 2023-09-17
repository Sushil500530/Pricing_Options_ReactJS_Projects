import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
// import { IoMdClose } from 'react-icons/io';
const Navbar = () => {
    const [open,setOpen] =useState(false) ;
    const routes = [
        { name: 'Home',id: 'home',path: '/',},
        {name: 'About',id: 'about',path: '/about',},
        {name: 'Services',id: 'services', path: '/services',},
        {name: 'Contact',id: 'contact',path: '/contact',},
        {name: 'Blog', id: 'blog', path: '/blog',}
        ];
    return (
        <nav className="relative">
          <div className="md:hidden text-2xl bg-slate-300 p-4" onClick={()=> setOpen(!open)}>
          {
            open === true ? <AiOutlineClose /> :  <AiOutlineMenu />
          }
            
            
          </div>
           <ul className={`md:flex duration-1000 md:item-center gap-5 
           ${open ? 'top-14' : '-top-80'}
           text-blue-900 font-medium bg-slate-200 px-5 pb-5 space-y-2 absolute md:static `}>
           {
                routes.map(route => <Link route={route}  key={route.id}
                ></Link>
           )}
           </ul>
        </nav>
    )
};

export default Navbar;