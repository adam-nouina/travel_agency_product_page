import React, { useContext, useEffect } from 'react';
import ElementsContext from '../context/ElementContext';
import { useParams } from 'react-router-dom';

export default function Show() {
    const { getElement, element } = useContext(ElementsContext);
    const { id } = useParams();

    useEffect(() => {
        getElement(id);
    }, []);

    return (
        <div className="container mt-3">
            <div className="card">
                <img
                    src={element.image}
                    className="card-img-top mx-auto mt-2"
                    alt="Product"
                    style={{ maxWidth: '50%' }}
                />
                <div className="card-body text-center">
                    <h5 className="card-title">{element.name}</h5>
                    <p className="card-text">{element.description}</p>
                    <ul className="list-group narrow-list-group mx-auto" style={{ maxWidth: '500px' }}>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <strong>Price:</strong>
                            <span>{element.price}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <strong>Rooms:</strong>
                            <span>{element.rooms}</span>
                        </li>
                        {element.get_city && (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong>City:</strong>
                                <span>{element.get_city.city}</span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
