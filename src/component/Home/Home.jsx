import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Phones from "../Phones/Phones";

const Home = () => {
    const phones = useLoaderData();
    return (
        <div>
            <Banner></Banner>

            <h1 className="text-2xl font-bold">All our Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                phones?.map(phone => <Phones key={phone.id} phone={phone}></Phones>)
            }

            </div>
         
            
            
        </div>
    );
};

export default Home;