import { useEffect, useState } from "react"

const useReviews = ()=>{
    const [products, setProducts]= useState([])

    useEffect(() =>{
        fetch('feedback.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[products]);

    return [products, setProducts];

}

export default useReviews;