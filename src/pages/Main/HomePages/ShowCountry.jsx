import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import CountryCard from "./CountryCard";


const ShowCountry = () => {

    const [newdata, setNewData] = useState([]);

    useEffect(() => {
        fetch(" https://tourism-management-server-psi.vercel.app/allCountries")
            .then(res => res.json())
            .then(data => setNewData(data))
    }, [])

    const typeWriterArray = ['Bangladesh', 'Thailand', 'Indonesia', 'Malaysia', 'Vietnam', 'Cambodia'];


    return (
        <div>
            <div className="flex justify-center my-8 w-96 h-12 md:w-full">
                <h2 className="text-2xl md:text-4xl  "><Typewriter words={typeWriterArray} loop={true} cursor={true}></Typewriter></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">

                <Fade>
                    {
                        newdata.map(data => <CountryCard key={data._id} country={data}></CountryCard>)
                    }
                </Fade>
            </div>
        </div>
    );
};

export default ShowCountry;