import axios from "axios";
import { useEffect, useState } from "react"

const useCategory = () => {

    let [category, setCategory] = useState();
       const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        axios('../../../public/categories.json')
        .then(res => {setCategory(res.data)
            setLoading(false);

        })


                    .catch(err => {
                console.error("Error loading categories:", err);
                setError(err);
                setLoading(false);
            });


    },[])
return { category, loading, error };
    
}

export default useCategory;