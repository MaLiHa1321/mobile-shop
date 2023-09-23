import { Link } from "react-router-dom";

const PhoneCard = ({phone}) => {
    const {id,image,phone_name,price,rating,brand_name} = phone || {};
    return (
        <div>
             <div className="card w-78 bg-base-100 shadow-xl">
  <figure  className="h-full w-full"><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{phone_name}</h2>
    <h2>Brand:{brand_name}</h2>
    <p>Price:{price}Tk</p>
    <p>Rating:{rating}</p>
    <div className="card-actions ">
        <Link to={`/phones/${id}`}>
        <button className="btn btn-primary w-full">Favourite</button>
        </Link>
    
    </div>
  </div>
</div>
            
        </div>
    );
};

export default PhoneCard;