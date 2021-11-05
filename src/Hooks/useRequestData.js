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
        /* const headers = {
            headers: {
                Auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkliTVc1NDJjQkpDM2xsRDRTZ3lLIiwibmFtZSI6Ik1hcmlsZW5lIiwiZW1haWwiOiJNYXJpbGVuZUBnbWFpbC5jb20iLCJjcGYiOiI3NzcuNzc3Ljc3Ny03NyIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSdWEgZGFzIFJ1YXMsIDY3OCwgUGVydG8gZGFzIFByb3hpbWlkYWRlcyAtIEJhaXJybyBkb3MgQmFpcnJvcyIsImlhdCI6MTYzNTc4NTAwOH0.MCLxzMeCcQzYjwS6YTASs-ZDGH1OlMAJ5HiBEU8ScTs"
            }
        } */
        axios.get(url, headers)
        .then((response) => {
            console.log(response.data)
            setInfo(response.data)
        }).catch((error) => {
            console.log(error.response)
        })
    }, [url])
    return (info)
}

export default useRequestData 