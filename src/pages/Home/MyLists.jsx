import { FaPen, FaRegTrashAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const MyLists = () => {
    const loadedData = useLoaderData()




    let count = 1;


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
                    <tbody>
                        {
                            loadedData.map(data => <tr key={data._id} className="hover">
                                <th>{count++}</th>
                                <td>{data.spot_name}</td>
                                <td>{data.location}, {data.country_name}</td>

                                <td><Link to={`/updateSpot/${data._id}`}><button
                                    className="btn btn-outline btn-primary">
                                    <FaPen /> Update
                                </button></Link></td>

                                <td><button className="btn btn-outline btn-error"><FaRegTrashAlt />Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyLists;