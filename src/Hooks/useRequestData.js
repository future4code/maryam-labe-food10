import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData = (estadoInicial, url) => {
    const [info, setInfo] = useState(estadoInicial)

    useEffect(() => {
        const headers = {
            headers: {
                Auth: localStorage.getItem("token")
            }
        }
        
        axios.get(url, headers)
        .then((response) => {
            setInfo(response.data)
        }).catch((error) => {
            console.log(error.response)
        })
    }, [url])
    return (info)
}

export default useRequestData 