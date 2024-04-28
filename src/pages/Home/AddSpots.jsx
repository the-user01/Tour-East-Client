import { useContext } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { AuthContext } from '../../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const AddSpots = () => {

    const typeWriterArray = ["Place You visited", "Place You want to visit", "Place You recommened to visit"];

    const { user, loader } = useContext(AuthContext);

    const handleAddSpots = e => {
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

        const tour_spot = { spot_name, country_name, location, average_cost, seasonality, travel_time, description, total_visitor, photo, email, name };

        console.log(tour_spot);

        fetch('http://localhost:5000/allSpots', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(tour_spot)
        })
            .then(res => res.json())
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Spot Added Successfully",
                });
            })

        form.reset();
    }

    return (
        <>
            <Helmet>
                <title>Add Tourist Spot </title>
            </Helmet>

            <div className="bg-gray-100 mt-6 p-24">
                <div className='flex items-center gap-8'>
                    <div>
                        <h2 className="w-44 lg:w-64 text-center text-xl md:text-3xl font-extrabold text-blue-950">Add Tourist Spot</h2>

                    </div>
                    <div className="text-sm md:text-lg font-bold text-green-600 w-28 md:w-72 h-5">
                        <Typewriter words={typeWriterArray} loop={true} cursor={true} />
                    </div>
                </div>

                {
                    loader ? <div className='mt-6 w-full text-center'><span className="loading loading-dots loading-lg"></span></div> :

                        <form className="space-y-4 mt-6" onSubmit={handleAddSpots}>
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
        </>
    );
};

export default AddSpots;