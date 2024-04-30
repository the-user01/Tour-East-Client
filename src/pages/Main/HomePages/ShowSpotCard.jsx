import { useEffect, useState } from "react";
import SpotCard from "./SpotCard";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const ShowSpotCard = () => {
    const [newdata, setNewData] = useState([]);

    useEffect(() => {
        fetch(" https://tourism-management-server-psi.vercel.app/allSpots")
            .then(res => res.json())
            .then(data => {
                if (data.length > 6) {
                    setNewData(data.slice(0, 6))
                }
                else {
                    setNewData(data)
                }
            })
    }, [])

    const typeWriterArray = ['Tourist Spots From all over the South-Asia']

    return (
        <div>
            <div className="flex justify-center my-8 w-96 h-12 md:w-full">
                <h2 className="text-2xl md:text-4xl  "><Typewriter words={typeWriterArray} loop={true} cursor={true}></Typewriter></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">

                <Fade>
                    {
                        newdata.map(data => <SpotCard key={data._id} spot={data}></SpotCard>)
                    }
                </Fade>
            </div>
        </div>
    );
};

export default ShowSpotCard;