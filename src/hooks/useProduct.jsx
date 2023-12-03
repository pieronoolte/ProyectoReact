// import { json } from '../components/product';
import { useEffect, useState } from 'react';



import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAdLYgDmf5Ci1WFMdDOZ73fTzH4xQTXDbo",
    authDomain: "bd-rect.firebaseapp.com",
    projectId: "bd-rect",
    storageBucket: "bd-rect.appspot.com",
    messagingSenderId: "565953072638",
    appId: "1:565953072638:web:a5a3a0bf0e83aa163504af"

};

const firebaseAp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseAp);


export const useProduct = (useHook, param) => {


    const [product, setProduct] = useState([]);
    const [products, setProducts] = useState([]);
    const [hidden, setHidden] = useState("");

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
