import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


const SpotDetails = () => {

    const loadedData = useLoaderData();

    const {_id, spot_name} = loadedData;

    return (
        <>
        <Helmet>
            <title>Spot Details</title>
        </Helmet>

            <div>
                <p>{_id}</p>
                <p>{spot_name}</p>
            </div>
        </>
    );
};

export default SpotDetails;