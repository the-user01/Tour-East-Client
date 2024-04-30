import { useLoaderData } from "react-router-dom";
import CountrySpotCard from "./CountrySpotCard";
import { Fade } from "react-awesome-reveal";


const CountrySpot = () => {

    const loaderData = useLoaderData();


    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-6">
                <Fade>
                    {
                        loaderData.map(data => <CountrySpotCard key={data._id} countrySpot={data}></CountrySpotCard>)
                    }
                </Fade>
            </div>
        </div>
    );
};

export default CountrySpot;