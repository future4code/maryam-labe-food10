import axios from "axios"
import { BASE_URL } from "../../constants/urls"

export const acceptBuy = (restaurantId, body) => {
    const url = `${BASE_URL}/restaurants/${restaurantId}/order`
    const headers = {
        headers: {
            auth: localStorage.getItem("token")
        }
    }
    axios.post(url, body, headers)
        .then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error.response)
        })
}