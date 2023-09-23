import { useEffect, useState } from "react";
import PhoneCard from "../component/phone/PhoneCard";


const Products = () => {

    const [favorite, setFavorite] = useState([]);
    const [notFound, setFound] = useState("");
    const [total, setTotal] = useState(0);
    const [show, setShow] = useState(false);

    useEffect(()=>{
        const favoriteItem = JSON.parse(localStorage.getItem('favo')) ;
        if(favoriteItem){
            setFavorite(favoriteItem)

        const totalPrice = favoriteItem.reduce((pre,current)=> pre + current.price,0);
        setTotal(totalPrice)
        }
        else{
           setFound("No data found")
        }
    

    },[])

    const handleDelete= () =>{
        localStorage.clear()
        setFavorite([])
        setFound("No data found")
        setTotal(0)
    }


    console.log(favorite)
    return (
        <div>

            <h1>this is product: {favorite.length}</h1>
            <p>Total Price: {total}</p>
            {
                notFound? <p className="w-11/12 mx-auto">{notFound}</p>: <div>
                    {favorite.length >0 && <button onClick={handleDelete} className="btn">Delete</button>}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {
                            show?  favorite.map(phone => <PhoneCard phone={phone}></PhoneCard>):

                        favorite.slice(0,4).map(phone => <PhoneCard phone={phone}></PhoneCard>)}</div>
                </div>

               
            }
            

<button onClick={()=>setShow(!show)} className="btn btn-primary m-5">
{
    show?"See less": "See more"
}
</button>

           
            
        </div>
    );
};

export default Products;