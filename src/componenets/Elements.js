import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ElementsContext from '../context/ElementContext'


export default function Elements() {
    
    const {elements, getElements, deleteElement,searchData} = useContext(ElementsContext)
    
    useEffect(()=>{
        if(searchData.current===false){
            getElements()
        } 
    },[])

    return (

        <div className="container">
            {elements.map((element,index)=>{
                return <div className="card my-2" key={index}>
                <div className="row no-gutters">
                    <div className="col-md-2">
                        <img src={element.image} className="card-img" alt={index}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{element.name}</h5>
                            <p className="card-text">{element.description}</p>
                            <p className="card-text">{element.get_city.city}</p>
                            <p className="card-text">Rooms: {element.rooms}</p>
                            <p className="card-text">{element.price}</p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <Link className="btn btn-primary m-1" to={`/${element.id}/show`} >Show Details</Link>
                        <Link className="btn btn-info m-1" to={`/${element.id}/edit`} >Edit</Link>
                        <Link className="btn btn-danger m-1" onClick={()=>deleteElement(element.id)} >Delete</Link>
                    </div>
                </div>
            </div>
            })}
        </div>
    )
}
