
const useAddToCart = (Cname, Cdesc) =>{

    var arr = JSON.parse(localStorage.getItem("cartItem"));
    if(arr){
        arr.push({'Cname':Cname, 'Cdesc' :Cdesc});
        localStorage.setItem("cartItem",JSON.stringify(arr));
    }else{
        arr = new Array({'Cname':Cname,'Cdesc':Cdesc});
        localStorage.setItem("cartItem", JSON.stringify(arr));
    }
    
    location.reload(true);
    return null;
}

export default useAddToCart;



















