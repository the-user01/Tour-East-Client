import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { BiTimer } from "react-icons/bi";
import { FaPeoplePulling } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";
import { IoMdGlobe } from "react-icons/io";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useLoaderData } from "react-router-dom";


const SpotDetails = () => {

    const loadedData = useLoaderData();

    const { spot_name, country_name, location, average_cost, seasonality, travel_time, description, total_visitor, photo, email, name } = loadedData;

    return (
        <>
            <Helmet>
                <title>Spot Details | {spot_name}</title>
            </Helmet>

            <div className="mt-6">
                <Fade>
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col">
                            <img src={photo} className=" rounded-lg shadow-2xl" />

                            <div className="bg-white w-full p-4 rounded-lg space-y-4">
                                <h1 className="text-2xl font-bold">{spot_name}</h1>
                                <p className='flex items-center gap-2'><IoMdGlobe />{country_name}</p>
                                <p className='flex items-center gap-2'><ImLocation2 />{location}</p>
                            </div>

                            <div className="bg-white w-full p-4 rounded-lg space-y-4">
                                <h3 className="text-lg font-bold">Details</h3>
                                <div className="text-sm space-y-2">
                                    <div className='flex items-center gap-2'>
                                        <TiWeatherPartlySunny className=' text-lg' />
                                        <p><span className="font-bold">Seasonality: </span>{seasonality}</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <BiTimer className='text-lg' />
                                        <p><span className="font-bold">Travel Time: </span>{travel_time}hrs</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <FaPeoplePulling className='text-lg' />
                                        <p><span className="font-bold">Total Visitor: </span>{total_visitor}</p>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-blue-950"><span>Average Cost: </span>${average_cost}</h3>
                            </div>

                            <div className="bg-white w-full p-4 rounded-lg space-y-4">
                                <h3 className="font-bold text-xl">Description</h3>
                                <p>{description}</p>
                                <div className="space-y-2">
                                    <p className="text-lg text-blue-950 font-bold">Info Provider</p>
                                    <hr />
                                    <p><span className="font-bold">Name: </span>{name}</p>
                                    <p><span className="font-bold">Email: </span>{email}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </Fade>
            </div>
        </>
    );
};

export default SpotDetails;



/*    

<div>
<h1 className="text-2xl font-bold">{estate_title}</h1>
                        <p className='flex items-center gap-2'><ImLocation2 />{location}</p>
                    </div>

                    <div className="bg-white w-full p-4 rounded-lg space-y-4">
                        <h3 className="text-lg font-bold">Details & Features</h3>
                        <div className="text-sm space-y-2">
                            <p><span className="font-bold">Segment Type: </span>{segment_name}</p>
                            <p><span className="font-bold">Area Size (sft): </span>{area}</p>
                            <p><span className="font-bold"></span></p>
                            <p><span className="font-bold"></span></p>
                        </div>
                        <h3 className="text-xl font-bold text-primary"><span>Price: </span>${price}</h3>
                    </div>

                    <div className="bg-white w-full p-4 rounded-lg space-y-4">
                        <h3 className="font-bold text-xl">Description</h3>
                        <p>{description}</p>
                    </div>

*/