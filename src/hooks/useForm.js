import { useState } from "react";

const useForm = (inicialState) => {
    const [form, setForm] = useState(inicialState)

    const onChangeInput = (event)=> {
        const {value, name} = event.target
        setForm({...form, [name]: value})
    }
    const clear = () => {
        setForm(inicialState)
    }
    return [form, onChangeInput, clear, setForm]
}
export default useForm