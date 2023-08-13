import React, { useContext, useEffect }from "react";
import ElementsContext from '../context/ElementContext'

export default function Search() {

    const {citys,getCitys,onChange3,search} = useContext(ElementsContext)

    useEffect(()=>{
        getCitys()
    },[])

    return (
        <div className="container bg-warning py-3 rounded-3">
            <div className="filter-component">

                <form onSubmit={search}>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <select className="form-select" aria-label="Default select example" name="city_id" onChange={onChange3}>
                                <option >Select a city</option>
                                {
                                    citys.map((city,i)=>{
                                        return <option value={city.id} key={i}>{city.city}</option>
                                    })
                                }
                            </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="check-in">Check-in</label>
                        <input className="form-control" type="date" id="check-in" name="checkin_date" onChange={onChange3}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="check-out">Check-out</label>
                        <input className="form-control" type="date" id="check-out" name="checkout_date" onChange={onChange3}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="guests">Rooms</label>
                        <input className="form-control" type="number" name="rooms" onChange={onChange3} />
                    </div>

                    <div className="form-group d-grid mt-3">
                        <button className="btn btn-primary " type="submit">Search</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
