import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const CountryCard = ({ country }) => {

    const {image, name, description } = country;

    return (
        <>
            <Link to={`/countrySpot/name/${name}`}>
                <div className="card w-96 bg-gray-100 shadow-xl">
                    <figure><img src={image} alt={name} className='pt-6'/></figure>
                    <div className="card-body text-blue-950 ">
                        <h2 className="card-title ">{name}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

CountryCard.propTypes = {
    country: PropTypes.object,
}

export default CountryCard;