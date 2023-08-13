import axios from "axios";
import { createContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ElementsContext = createContext()

export const ElementProvider = ({ children }) => {

    const searchData= useRef(false)
    const NoFiltreds= useRef()

    const [elements, setElements] = useState([]);
    const [element, setElement] = useState([]);
    const [citys, setCitys] = useState([])
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const [formValues, SetFormeValues] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
        rooms: "",
        city_id: "",
    })
    const [researchForm, SetresearchForm] = useState({
        city_id: "",
        checkin_date: "",
        checkout_date: "",
        rooms: "",
    })

    const onChange = (e) => {
        const { name, value } = e.target;
        SetFormeValues({ ...formValues, [name]: value })
    }
    const onChange2 = (e) => {
        const { name } = e.target;
        SetFormeValues({ ...formValues, [name]: e.target.files[0] })
    }
    const onChange3 = (e) => {
        const { name,value } = e.target;
        SetresearchForm({ ...researchForm, [name]: value })
    }

    const getElements = async () => {
        const apiElements = await axios.get("http://127.0.0.1:8000/api/products");
        setElements(apiElements.data.data)
        NoFiltreds.current=apiElements.data.data
    }

    const getElement = async (id) => {
        const response = await axios.get("http://127.0.0.1:8000/api/products/" + id);
        setElement(response.data.data)
        SetFormeValues({
            name: response.data.data.name,
            description: response.data.data.description,
            price: response.data.data.price,
            image: response.data.data.image,
            rooms: response.data.data.rooms,
            city_id: response.data.data.city_id,
        })
    }

    const storeElement = async (e) => {
        e.preventDefault()
        const fData = new FormData()

        fData.append('name', formValues.name);
        fData.append('description', formValues.description);
        fData.append('price', formValues.price);
        fData.append('image', formValues.image);
        fData.append('rooms', formValues.rooms);
        fData.append('city_id', formValues.city_id);
        try {
            await axios.post("http://127.0.0.1:8000/api/products", fData)
            navigate('/')
        } catch (error) {
            if (error.response.status === 422) {
                setErrors(error.response.data.errors)
            }
        }
    }

    const updateElement = async (e) => {
        e.preventDefault()
        const fData2 = new FormData()
        fData2.append('name', formValues.name);
        fData2.append('description', formValues.description);
        fData2.append('price', formValues.price);
        fData2.append('image', formValues.image);
        fData2.append('rooms', formValues.rooms);
        fData2.append('city_id', formValues.city_id);
        try {
            setErrors({})
            await axios.post("http://127.0.0.1:8000/api/products/" + element.id, fData2)
            // navigate('/')
        } catch (error) {
            console.log(error);
            if (error.response.status === 422) {
                setErrors(error.response.data.errors)
            }
        }
    }

    const deleteElement = async (id) => {
        try {
            await axios.delete("http://127.0.0.1:8000/api/products/" + id)
            getElements()
        } catch (error) {
            if (error.response.status === 422) {
                setErrors(error.response.data.errors)
            }
        }
    }

    const getCitys = async () => {
        try {
            const response  = await axios.get("http://127.0.0.1:8000/api/citys")
            setCitys(response.data);
        } catch (error) {
            if (error.response.status === 422) {
                setErrors(error.response.data.errors)
            }
        }
    }

    const search = async (e) => {
        e.preventDefault()
        const city_id= researchForm.city_id
        const checkin_date= researchForm.checkin_date
        const checkout_date= researchForm.checkout_date
        const rooms= researchForm.rooms

        try {
            const response  = await axios.get(
                "http://127.0.0.1:8000/api/search?city_id="+city_id+"&checkIn_Date="+checkin_date+"&checkOut_Date="+checkout_date+"&rooms="+rooms
            )
            setElements(response.data);
            searchData.current =  true
            navigate('/')
        } catch (error) {
            if (error.response.status === 422) {
                setErrors(error.response.data.errors)
            }
        }
    }

    return <ElementsContext.Provider
        value={{
            elements,
            element,
            getElements,
            setElements,
            getElement,
            onChange,
            onChange2,
            formValues,
            storeElement,
            errors,
            updateElement,
            deleteElement,
            getCitys,
            citys,
            search,
            onChange3,
            searchData,
            NoFiltreds
        }}>{children}
    </ElementsContext.Provider>
}

export default ElementsContext