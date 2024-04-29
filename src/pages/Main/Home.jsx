import { Helmet } from "react-helmet-async";
import ShowSpotCard from "./HomePages/ShowSpotCard";
// import Banner from "./HomePages/Banner";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Tour-East | Home</title>
            </Helmet>
            
            {/* <div>
                <Banner></Banner>
            </div> */}

            <div className="flex justify-center">
               <ShowSpotCard></ShowSpotCard>
            </div>
        </>
    );
};

export default Home;