import PropTypes from 'prop-types';
import { BiTimer } from 'react-icons/bi';
import { FaPeoplePulling } from 'react-icons/fa6';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const CountrySpotCard = ({countrySpot}) => {

    const { _id, spot_name, average_cost, seasonality, travel_time, total_visitor, photo } = countrySpot


    return (
        <>
            <div className="card w-96 bg-gray-100 shadow-xl">
                <figure><img src={photo} alt={spot_name} /></figure>
                <div className="card-body text-blue-950 ">
                    <h2 className="card-title ">{spot_name}</h2>
                    <div className='flex items-center gap-2'>
                        <RiMoneyDollarCircleLine className='text-lg' />
                        <p><span className='font-bold '>Average Cost:</span> ${average_cost}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaPeoplePulling className='text-lg' />
                        <p><span className='font-bold'>Total Visitor:</span> {total_visitor}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BiTimer className='text-lg' />
                        <p><span className='font-bold'>Travel Time:</span> {travel_time}hrs</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TiWeatherPartlySunny className=' text-lg' />
                        <p><span className='font-bold'>Seasonality:</span> {seasonality}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/spotDetails/${_id}`}><button className="btn btn-outline btn-success">View Details</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

CountrySpotCard.propTypes = {
    countrySpot: PropTypes.object,
}

export default CountrySpotCard;