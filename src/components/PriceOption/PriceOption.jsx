import PropTypes from 'prop-types'; 
import Feature from '../feature/Feature';
const PriceOption = ({option}) => {
    const {name,price,features} = option ;
    // console.log(option);
    return (
        <>
        <div className='bg-gray-400 p-4 rounded '>
            <h2>
                <span className="text-5xl font-semibold text-center">Price: {price}</span>
                <span className='text-2xl'>/months</span>
                </h2>
                <h4 className='text-3xl text-center'>{name}</h4>
                {
                    features.map((feature,index) => <Feature
                    key={index}
                    feature={feature}
                    ></Feature>)
                }
                <div className='flex item-center justify-center'>
                <button className='mt-6 w-full px-6 py-1 font-medium text-xl border-2 rounded border-green-500 text-green-900 hover:bg-green-500 hover:text-white hover:transition duration-300 hover:-translate-y-1 hover:scale-100 transition ease-in-out delay-150'>Buy Now</button>
                
                </div>
        </div>
        </>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}

export default PriceOption;