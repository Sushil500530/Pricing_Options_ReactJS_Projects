

import PropTypes from 'prop-types'; 
const Link = ({route}) => {
    // const {path,name} = route ;
    return (
       <>
         <li className="hover:underline hover:underline-offset-4 transition hover:text-blue-500 mt-2 w-32 md:w-auto lg:w-auto text-center hover:bg-slate-400 md:hover:bg-transparent">
            <a href={route.path}>{route.name}</a>
       </li>
       </>
    )
}

Link.propTypes = {
    route:PropTypes.object.isRequired
}
export default Link;
