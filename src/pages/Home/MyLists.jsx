import { useContext } from "react";
import { FaPen, FaRegTrashAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const MyLists = () => {
    const loadedData = useLoaderData()

    const {user, loader} = useContext(AuthContext);

    let count = 1;

    const handleUpdateSpots = e =>{
        e.preventDefault()
    }

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

                                <td><button
                                    onClick={() => document.getElementById('my_modal_3').showModal()}
                                    className="btn btn-outline btn-primary">
                                    <FaPen /> Update
                                </button></td>

                                <td><button className="btn btn-outline btn-error"><FaRegTrashAlt />Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    {
                    loader ? <div className='mt-6 w-full text-center'><span className="loading loading-dots loading-lg"></span></div> :

                        <form className="space-y-4 mt-6" onSubmit={handleUpdateSpots}>
                            {/* Form Row */}
                            <div className="md:flex items-center space-y-4 md:space-y-0">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-base">Spot Name</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name="spot_name" placeholder="Spot Name" className="input input-bordered w-full border-2 border-blue-300" />
                                    </label>
                                </div>

                                <div className=" md:w-1/2 md:ml-4">
                                    <label className="label">
                                        <span className="label-text text-base">Country Name</span>
                                    </label>
                                    <select className="select border-2 border-blue-300 w-full" name='country_name'>
                                        <option></option>
                                        <option>Bangladesh</option>
                                        <option>Thailand</option>
                                        <option>Indonesia</option>
                                        <option>Malaysia</option>
                                        <option>Vietnam</option>
                                        <option>Cambodia</option>
                                    </select>
                                </div>
                            </div>

                            {/* Form Row */}
                            <div className="md:flex space-y-4 md:space-y-0">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-base">Location</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name="location" placeholder="Location" className="input input-bordered w-full border-2 border-blue-300" />
                                    </label>
                                </div>

                                <div className="form-control md:w-1/2 md:ml-4">
                                    <label className="label">
                                        <span className="label-text text-base">Average Cost</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name="average_cost" placeholder="Average Cost" className="input input-bordered w-full border-2 border-blue-300" />
                                    </label>
                                </div>
                            </div>

                            {/* Form Row */}
                            <div className="md:flex space-y-4 md:space-y-0">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-base">Seasonality</span>
                                    </label>
                                    <select className="select border-2 border-blue-300 w-full" name='seasonality'>
                                        <option></option>
                                        <option>Spring</option>
                                        <option>Summer</option>
                                        <option>Monsoon</option>
                                        <option>Autumn</option>
                                        <option>winter</option>
                                    </select>
                                </div>

                                <div className="form-control md:w-1/2 md:ml-4">
                                    <label className="label">
                                        <span className="label-text text-base">Travel Time</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name="travel_time" placeholder="Travel Time" className="input input-bordered w-full border-2 border-blue-300" />
                                    </label>
                                </div>
                            </div>

                            {/* Form Row */}
                            <div className="md:flex space-y-4 md:space-y-0">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-base">Short Description</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full border-2 border-blue-300" />
                                    </label>
                                </div>

                                <div className="form-control md:w-1/2 md:ml-4">
                                    <label className="label">
                                        <span className="label-text text-base">Total Visitor Per Year</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name="total_visitor" placeholder="Total Visitor Per Year" className="input input-bordered w-full border-2 border-blue-300" />
                                    </label>
                                </div>
                            </div>

                            {/* Form Row */}
                            <div className="space-y-4 md:space-y-0" >
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-base">Photo URL</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full border-2 border-blue-300" />
                                    </label>
                                </div>
                            </div>

                            {/* Form Row */}
                            <div className="md:flex space-y-4 md:space-y-0">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-base">User Email</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name="email" defaultValue={user.email} placeholder="User Email" className="input input-bordered w-full border-2 border-blue-300" />
                                    </label>
                                </div>

                                <div className="form-control md:w-1/2 md:ml-4">
                                    <label className="label">
                                        <span className="label-text text-base">User Name</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name="name" defaultValue={user.displayName} placeholder="User Name" className="input input-bordered w-full border-2 border-blue-300" />
                                    </label>
                                </div>
                            </div>

                            <input type="submit" value="Add Spot" className="btn btn-block bg-primary text-white" />

                        </form>
                }

                </div>
            </dialog>

        </div>
    );
};

export default MyLists;