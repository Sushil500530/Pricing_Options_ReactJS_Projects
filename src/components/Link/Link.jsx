

import PropTypes from 'prop-types'; 
const Link = ({route}) => {
    // const {path,name} = route ;
    return (
       <>
         <li className="hover:underline hover:underline-offset-4 transition hover:text-blue-500">
            <a href={route.path}>{route.name}</a>
       </li>
       </>
    )
}

Link.propTypes = {
    route:PropTypes.object.isRequired
}
export default Link;
