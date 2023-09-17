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
        <nav>
          <div className="md:hidden text-2xl" onClick={()=> setOpen(!open)}>
          {
            open === true ? <AiOutlineClose /> :  <AiOutlineMenu />
          }
            
            
          </div>
           <ul className="md:flex gap-5 text-blue-900 font-medium">
           {
                routes.map(route => <Link route={route}  key={route.id}
                ></Link>
           )}
           </ul>
        </nav>
    )
};

export default Navbar;