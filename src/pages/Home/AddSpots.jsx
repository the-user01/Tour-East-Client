import { Input} from "@material-tailwind/react";

const AddSpots = () => {

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

        const tour_spot = {spot_name, country_name, location, average_cost, seasonality, travel_time, description, total_visitor, photo};

        console.log(tour_spot);

        



    }

    return (
        <div className="p-24">
            <h2 className="text-xl md:text-3xl font-extrabold">Add Tourist Spot</h2>

            <form className="space-y-4 mt-6" onSubmit={handleAddSpots}>
                {/* Form Row */}
                <div className="md:flex space-y-4 md:space-y-0">
                    <div className="form-control md:w-1/2">
                        <Input label="Spot Name" name="spot_name"/>
                    </div>

                    <div className=" md:w-1/2 md:ml-4">
                        <Input label="Country Name" name="country_name"/>
                    </div>
                </div>

                {/* Form Row */}
                <div className="md:flex space-y-4 md:space-y-0">
                    <div className="form-control md:w-1/2">
                        <Input label="Location" name="location" />
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <Input label="Average Cost" name="average_cost" />
                    </div>
                </div>

                {/* Form Row */}
                <div className="md:flex space-y-4 md:space-y-0">
                    <div className="form-control md:w-1/2">
                        <Input label="Seasonality" name="seasonality" />
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <Input label="Travel Time" name="travel_time" />
                    </div>
                </div>

                {/* Form Row */}
                <div className="md:flex space-y-4 md:space-y-0">
                    <div className="form-control md:w-1/2">
                        <Input label="Short Description" name="description" />
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <Input label="Total Visitor Per Year" name="total_visitor" />
                    </div>
                </div>

                {/* Form Row */}
                <div className="space-y-4 md:space-y-0" >
                    <div className="form-control w-full">
                        <Input label="Photo URL" name="photo" />
                    </div>
                </div>

                <input type="submit" value="Add Spot" className="btn btn-block bg-primary text-white" />

            </form>

        </div>
    );
};

export default AddSpots;