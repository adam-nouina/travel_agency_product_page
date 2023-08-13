import React, { useContext, useEffect} from 'react'
import ElementsContext from '../context/ElementContext';
import { useParams } from 'react-router-dom';

export default function Edit() {

    const {onChange,onChange2, errors, formValues, getElement,updateElement,citys,getCitys} = useContext(ElementsContext)
    const {id} = useParams()

    useEffect(()=>{
        getElement(id)
        getCitys()
    },[])

    return (
        <div className='container mt-5'>
            <form onSubmit={updateElement}>
                <div className="form-group">
                    <label>Name</label>
                    <input name="name" value={formValues.name} type="text" onChange={onChange} className="form-control" />
                    {errors.name && <span className='text-danger'>{errors.name[0]}</span>}
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input name="description" value={formValues.description} onChange={onChange} type="text" className="form-control" />
                    {errors.description && <span className='text-danger'>{errors.description[0]}</span>}
                </div>
                <div className="form-group">
                    <label>Prix</label>
                    <input name="price" value={formValues.price} onChange={onChange} type="number" className="form-control" />
                    {errors.price && <span className='text-danger'>{errors.price[0]}</span>}
                </div>
                <div className="form-group">
                    <label>Rooms</label>
                    <input name="rooms" value={formValues.rooms} onChange={onChange} type="number" className="form-control" />
                    {errors.price && <span className='text-danger'>{errors.rooms[0]}</span>}
                </div>
                <div>
                    <label>Citys</label>
                    <select onChange={onChange} value={formValues.city_id} className="form-select" aria-label="Default select example" name="city_id">
                        <option >Select a city</option>
                        {
                            citys.map((city,i)=>{
                                return <option value={city.id} key={i}>{city.city}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Example file input</label>
                    <input name="image" onChange={onChange2} type="file" className="form-control-file" />
                    {errors.image && <span className='text-danger'>{errors.image[0]}</span>}
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}
