import { useState } from "react";
import ShowLists from "./ShowLists";
import { useLoaderData } from "react-router-dom";

const MyLists = () => {
    const loadedData = useLoaderData();

    const [spots, setSpots] = useState(loadedData);
    const count = 1;

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-bold text-base md:text-lg">
                            <th></th>
                            <th>Spot Name</th>
                            <th>Spot Location</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    {
                        spots.map((spot, index) =>
                            <ShowLists
                                key={spot._id}
                                spot={spot}
                                spots={spots}
                                setSpots={setSpots}
                                count={count+index}
                            ></ShowLists>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default MyLists;