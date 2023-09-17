import { FcCheckmark } from 'react-icons/fc';
import PropTypes from 'prop-types'
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex'><FcCheckmark  className='text-2xl font-bold' />{feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string.isRequired,
}
export default Feature;