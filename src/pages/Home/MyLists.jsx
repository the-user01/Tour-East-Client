import { useLoaderData } from "react-router-dom";

const MyLists = () => {
    const loadedData = useLoaderData()


    return (
        <div>
            {loadedData.length}
        </div>
    );
};

export default MyLists;