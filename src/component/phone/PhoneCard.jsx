import swal from 'sweetalert';


const PhoneCard = ({phone}) => {
   
    const {id,image,phone_name,price,rating,brand_name} = phone || {};

    const handleFavourites= () =>{
      

        const addedFavo =[];

        const favoriteItem = JSON.parse(localStorage.getItem('favo')) ;

        if(!favoriteItem){
            addedFavo.push(phone) 
            localStorage.setItem('favo',JSON.stringify(addedFavo))

        }
        else{
            const exist = favoriteItem.find(phone => phone.id === id)
            console.log(exist)
            if(!exist){
                addedFavo.push(...favoriteItem,phone)  
                localStorage.setItem('favo',JSON.stringify(addedFavo))
                swal("Good job!", "You've added the item")

            }
            else{
                swal("Error", "You lready added this item", "error")
              return;
            }
       

        }

        
    }
    return (
        <div>
             <div className="card w-78 bg-base-100 shadow-xl">
  <figure  className="h-full w-full"><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{phone_name}</h2>
    <h2>Brand:{brand_name}</h2>
    <p>Price:{price}Tk</p>
    <p>
    <Rating
  initialRating={rating}
  readonly
/></p>
    <div className="card-actions ">
     
        <button onClick={handleFavourites} className="btn btn-primary w-full">Favourite</button>
       
    
    </div>
  </div>
</div>
            
        </div>
    );
};

export default PhoneCard;