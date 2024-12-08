

const useGetToCart = () =>{
    var arr = JSON.parse(localStorage.getItem("cartItem"));
    
    return arr ? arr : null;
}

export default useGetToCart;