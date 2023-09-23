import { Link } from "react-router-dom";


const Phones = ({phone}) => {
    console.log(phone)
    const {id,image,phone_name,price,rating} = phone || {};
    return (
        <div className="py-4">
           
 <div className="card w-78 bg-base-100 shadow-xl">
  <figure  className="h-full w-full"><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{phone_name}</h2>
    <p>Price:{price}Tk</p>
    <p>Rating:{rating}</p>
    <div className="card-actions ">
        <Link to={`/phones/${id}`}>
        <button className="btn btn-primary w-full">Buy Now</button>
        </Link>
    
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Phones;