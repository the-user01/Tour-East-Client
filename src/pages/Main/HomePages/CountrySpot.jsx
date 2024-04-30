import { useLoaderData } from "react-router-dom";
import CountrySpotCard from "./CountrySpotCard";


const CountrySpot = () => {

    const loaderData = useLoaderData();


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-6">
            {
                loaderData.map(data => <CountrySpotCard key={data._id} countrySpot= {data}></CountrySpotCard>)
            }
        </div>
    );
};

export default CountrySpot;