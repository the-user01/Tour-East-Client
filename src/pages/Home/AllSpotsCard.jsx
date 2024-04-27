import PropTypes from 'prop-types';
import { FaLocationDot } from "react-icons/fa6";


const AllSpotsCard = ({ spot }) => {

    const { spot_name, country_name, description, photo } = spot;



    return (
        <>
            <div className="card w-96 bg-gray-100 shadow-xl">
                <figure><img src={photo} alt={spot_name} /></figure>
                <div className="card-body text-blue-950 ">
                    <h2 className="card-title ">{spot_name}</h2>
                    <p className='flex items-center gap-2 '> <FaLocationDot className='text-green-700' />{country_name}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-success">View Details</button>
                    </div>
                </div>
            </div>
        </>
    );
};

AllSpotsCard.propTypes = {
    spot: PropTypes.object,
}

export default AllSpotsCard;