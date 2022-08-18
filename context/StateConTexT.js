

import React,{createContext,useContext,useState,useEffect} from 'react'
import {toast} from 'react-hot-toast';

const komali = createContext();

export const StateConTexT = ({ children}) =>{
    const [showcart, setShowcart] = useState(false);
    const [cartItem, setcartItem] = useState([]);
    const [totalprice, setTotalprice] = useState(0);
    const [totalQty, setTotalQty] = useState(0);
    const [qty, setQty] = useState(1);

    // fav items
    const [Favitem,setFavitem] = useState([]);
    const [favqty, setFavqty] = useState(0);

    let foundproduct;
    let index;

    // for increasing the quantity
    const incqty = ()=>{
        setQty((prevqty)=> {
            
            return prevqty + 1;
        });
    }
    const decqty = ()=>{
        setQty((prevqty)=> {
            if(prevqty-1 < 1)
                return 1;
            return prevqty-1;
        });
    }
    // quantity fuctoion ends here
    // add to cartfunctionality starts here
    const onADDtocart = (product,quantity,size) => {
        // checking whter this product is alrady in cart or not yes means increase the qty
        const checkproductInCart = cartItem.find((item) => item._id === product._id);

        setTotalprice((prevTotalprice)=> prevTotalprice + product.price * quantity);
        setTotalQty((prevTotalqty)=> prevTotalqty + quantity);

        if(checkproductInCart){
    
            const updatedCartitems = cartItem.map((cartProduct) =>{
                if(cartProduct.id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })

            setcartItem(updatedCartitems);
            toast.success("Again Added to the Cart");

        } else{
            console.log(product);
            product.quantity = quantity;
            product.size = size;
            console.log(product.quantity);
            console.log(product.size);

            setcartItem([...cartItem,{...product}]);

            toast.success(`${product.name} added to the cart`);
        }  

    }
    // favitems
    const onADDFavitem = (product)=>{
        const checkFavIteminList = Favitem.find((item)=> item._id === product._id);

        if (checkFavIteminList) {
            toast.error("Item is already in FavItem List");
        }
        else{
            setFavitem([...Favitem,{...product}]);
            setFavqty((prevfavqty)=> prevfavqty+1);

            toast.success(`${product.name} added to FavList`)
        }
    }

    const onRemoveFav = (product)=>{
        const newFavItem = Favitem.filter((item)=> item._id !== product._id);
        setFavitem(newFavItem);
        setFavqty((prevfavqty)=> prevfavqty-1)
    }

    // cartitemquantity
    const toggleCartItemQuantity = (id,value) => {
        foundproduct = cartItem.find((item)=> item._id === id);
        index = cartItem.findIndex((product) => product._id === id);

        const newCartitems = cartItem.filter((item) => item._id !== id)

        if(value === 'inc'){
            setcartItem([...newCartitems,{...foundproduct,
            quantity: foundproduct.quantity + 1
            }]);
            setTotalprice((prevPrice) => prevPrice + foundproduct.price)
            setTotalQty((prevtotalqty)=> prevtotalqty + 1)
        }
        else if (value === 'dec'){
            if(foundproduct.quantity > 1){
                setcartItem([...newCartitems,{...foundproduct,
                    quantity: foundproduct.quantity - 1
                    }]);
                    setTotalprice((prevPrice) => prevPrice - foundproduct.price)
                    setTotalQty((prevtotalqty)=> prevtotalqty - 1)
            }
        }
        
    }
    const onRemove = (product) =>{
        foundproduct = cartItem.find((item)=> item._id === product._id);
        const newCartitems = cartItem.filter((item)=> item._id !== product._id);

        setTotalprice((prevPrice)=> prevPrice - foundproduct.price * foundproduct.quantity);
        setTotalQty(prevTotalQty => prevTotalQty - foundproduct.quantity);
        setcartItem(newCartitems);
    }

    const onNewSize = (product,size)=>{

            product.size = size;
        
        
    }

    return (
        <komali.Provider
            value={{
              showcart,
              cartItem,
              totalQty,
              totalprice,
              qty,
              incqty,
              decqty,  
              onADDtocart,
              setShowcart,
              setcartItem,
              toggleCartItemQuantity,
              onRemove,
              Favitem,
              onADDFavitem,
              favqty,
              onRemoveFav,
              onNewSize
            }}
        >
            {children}
        </komali.Provider>
    )
}

export const useStateContext = () => useContext(komali)