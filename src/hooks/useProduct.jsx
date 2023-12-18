import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import {firebase} from './useFirebase'

export const useProduct = (useHook, param) => {

    const [product, setProduct] = useState([]);
    const [products, setProducts] = useState([]);
    const [hidden, setHidden] = useState("");
    const {db} = firebase()

    useEffect(() => {

        async function GetPorducts() {
            try {
                const querySnapshot = await getDocs(query(collection(db, "bd-rect"), orderBy('id')));
                const json = querySnapshot.docs.map((doc) => ({
                    id: doc.data().id,
                    name: doc.data().name,
                    content: doc.data().content,
                    price: doc.data().price,
                    category: doc.data().category,
                    img: doc.data().img
                }));
                console.log(json)

                if (useHook == true) {
                    console.log(typeof(json))
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

            } catch (error) {
                console.error('Error al obtener documentos:', error);
                return []
            }
        }

        GetPorducts()

    }, [param])

    return { product, products, hidden }
}
