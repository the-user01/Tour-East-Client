// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllSpotsCard from "./AllSpotsCard";
import { Helmet } from "react-helmet-async";
import { Typewriter } from 'react-simple-typewriter'


const AllSpots = () => {

    const loadedSpots = useLoaderData();

    // const [spots, setSpots] = useState(loadedSpots);

    const typeWriterArray = ["Bangladesh", "Thailand", "Indonesia", "Malaysia", "Vietnam", "Cambodia"];


    return (
        <div>
            <Helmet>
                <title>Tourists Spots</title>
            </Helmet>

            <div className="text-center my-6">
                <div>
                    <h2 className="text-xl md:text-3xl">Tourists Sposts from all over the South Asia</h2>
                </div>
                <div className="text-base md:text-xl font-bold text-green-600 mt-4 h-5">
                    <Typewriter words={typeWriterArray} loop={true} cursor={true} />
                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className=" mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        loadedSpots.map(spot => <AllSpotsCard key={spot._id} spot={spot}></AllSpotsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllSpots;