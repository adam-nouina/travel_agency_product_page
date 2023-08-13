import React, { useContext, useEffect }from "react";
import ElementsContext from '../context/ElementContext'

export default function HomeForm() {

    const {citys,getCitys,onChange3,search} = useContext(ElementsContext)

    useEffect(()=>{
        getCitys()
    },[])

    return <div className='hotel-searchbar container'>
                <form onSubmit={search}>
                    <div className="flex-cont">
                        <div className="dest">
                            <label for="destination">Destination</label>
                            <select className="form-select" aria-label="Default select example" name="city_id" onChange={onChange3}>
                                <option >Select a city</option>
                                {
                                    citys.map((city,i)=>{
                                        return <option value={city.id} key={i}>{city.city}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="checkIn">
                            <label>Check In</label>
                            <input type="date" className="form-control" id="checkIn" name="checkin_date" onChange={onChange3}/>
                        </div>
                        <div className="checkOut">
                            <label>Check Out</label>
                            <input type="date" className="form-control" id="checkOut" name="checkout_date" onChange={onChange3}/>
                        </div>
                        <div className="room">
                            <label>Rooms</label>
                            <input type="number" className="form-control" name="rooms" onChange={onChange3}/>
                        </div>
                        <div className="check">
                            <button type="submit" className="form-control btn btn-primary btn2 w-100">Check Availability</button>
                        </div>
                    </div>
                </form>
            </div>
}
