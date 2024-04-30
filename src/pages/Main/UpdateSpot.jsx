import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { Typewriter } from "react-simple-typewriter";

const UpdateSpot = () => {

    const { user, loader } = useContext(AuthContext);

    const loadedData = useLoaderData();

    const navigate = useNavigate();
    

    const typeWriterArray = ['Update Spot Details', 'Add More Realistic Information', 'Be a guide', 'Be a Guard(ian)', 'Become an EYE']

    const { _id, spot_name, country_name, location, average_cost, seasonality, travel_time, description, total_visitor, photo } = loadedData;


    const handleUpdateSpots = e => {
        e.preventDefault();

        const form = e.target;

        const spot_name = form.spot_name.value;
        const country_name = form.country_name.value;
        const location = form.location.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const description = form.description.value;
        const total_visitor = form.total_visitor.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const name = form.name.value;

        const update_tour_spot = { spot_name, country_name, location, average_cost, seasonality, travel_time, description, total_visitor, photo, email, name };

        fetch(` https://tourism-management-server-n8h0y9nn7-theuser01s-projects.vercel.app/allSpots/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(update_tour_spot)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Spot Updated Successfully",
                    });

                }
            })

        navigate(`/myLists/email/${user.email}`)
    }



    return (
        <>
            <Helmet>
                <title>Update Spot</title>
            </Helmet>
            <div className="text-center my-6">
                <h2 className="text-2xl md:text-4xl"><Typewriter words={typeWriterArray} loop={true} cursor={true}></Typewriter></h2>
            </div>
            <div className="container mx-auto">
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
                                        <input type="text" name="spot_name" defaultValue={spot_name} placeholder="Spot Name" className="input input-bordered w-full border-2 border-blue-300" />
                                    </label>
                                </div>

                                <div className=" md:w-1/2 md:ml-4">
                                    <label className="label">
                                        <span className="label-text text-base">Country Name</span>
                                    </label>
                                    <select className="select border-2 border-blue-300 w-full" name='country_name'>
                                        <option>{country_name}</option>
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
                                        <input type="text" name="location" defaultValue={location} placeholder="Location" className="input input-bordered w-full border-2 border-blue-300" />
                                    </label>
                                </div>

                                <div className="form-control md:w-1/2 md:ml-4">
                                    <label className="label">
                                        <span className="label-text text-base">Average Cost</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name="average_cost" defaultValue={average_cost} placeholder="Average Cost" className="input input-bordered w-full border-2 border-blue-300" />
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
                                        <option>{seasonality}</option>
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
                                        <input type="text" name="travel_time" defaultValue={travel_time} placeholder="Travel Time" className="input input-bordered w-full border-2 border-blue-300" />
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
                                        <input type="text" name="description" defaultValue={description} placeholder="Short Description" className="input input-bordered w-full border-2 border-blue-300" />
                                    </label>
                                </div>

                                <div className="form-control md:w-1/2 md:ml-4">
                                    <label className="label">
                                        <span className="label-text text-base">Total Visitor Per Year</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name="total_visitor" defaultValue={total_visitor} placeholder="Total Visitor Per Year" className="input input-bordered w-full border-2 border-blue-300" />
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
                                        <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full border-2 border-blue-300" />
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

                                <div className="form-control md:w-1/2 md:ml-4   ">
                                    <label className="label">
                                        <span className="label-text text-base">User Name</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name="name" defaultValue={user.displayName} placeholder="User Name" className="input input-bordered w-full border-2 border-blue-300" />
                                    </label>
                                </div>
                            </div>

                            <input type="submit" value="Update Spot" className="btn btn-block bg-primary text-white" />

                        </form>
                }

            </div>
        </>
    );
};

export default UpdateSpot;