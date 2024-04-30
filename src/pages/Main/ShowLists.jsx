import PropTypes from 'prop-types';
import { FaPen, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ShowLists = (params) => {

    const { spot, spots, setSpots, count } = params;

    const { _id, spot_name, location, country_name } = spot;

    const handleSpotDelete = () => {
        Swal.fire({
            title: "Are you sure, You want to delete?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(` https://tourism-management-server-n8h0y9nn7-theuser01s-projects.vercel.app/allSpots/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Spot has been deleted.",
                                icon: "success",
                            });
                            const reamining = spots.filter(spot => spot._id !== _id);
                            setSpots(reamining);
                        }
                    })
            }
        });
    }



    return (
        <>
            <tbody>
                <tr key={_id} className="hover">
                    <th>{count}</th>
                    <td>{spot_name}</td>
                    <td>{location}, {country_name}</td>

                    <td><Link to={`/updateSpot/${_id}`}><button
                        className="btn btn-outline btn-primary">
                        <FaPen /> Update
                    </button></Link></td>

                    <td><button
                        onClick={() => handleSpotDelete(_id)}
                        className="btn btn-outline btn-error">
                        <FaRegTrashAlt />Delete
                    </button></td>
                </tr>
            </tbody>
        </>
    );
};

ShowLists.propTypes = {
    spot: PropTypes.object,
}

export default ShowLists;