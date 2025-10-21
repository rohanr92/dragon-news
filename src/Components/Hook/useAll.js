import axios from "axios";
import { useEffect, useState } from "react"

const useAll = () => {

    let [news, setNews] = useState();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        axios('../news.json')
        .then(res => {setNews(res.data)
            setLoading(false);
        })


        .catch(err => {
                console.error("Error loading categories:", err);
                setError(err);
                setLoading(false);
            });


    },[])
return { news, loading, error };
    
}

export default useAll;