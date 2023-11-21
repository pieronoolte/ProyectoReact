import { json } from '../components/product';
import { useEffect, useState } from 'react';

export const useProduct = (useHook, param) => {

    const [product, setProduct] = useState([]);
    const [products, setProducts] = useState([]);
    const [hidden, setHidden] = useState("");

    useEffect(() => {

        if (useHook == true) {
            const updateArray = json.filter(item => item);
            setProducts(updateArray);
            setHidden("")
            if (param == 'category1' || param == 'category2' || param == 'category3' || param == 'category4' || param == 'category5') {
                const categoryArray = json.filter((item) => item.category == param)
                setProducts(categoryArray)
                setHidden("d-none")
                console.log(products)
            }
        }
        else if (useHook == false) {
            const idProduct = json.find(item => item.id == param);
            setProduct(idProduct);
        }
        
    }, [param])
   
    return {product, products, hidden}
}
