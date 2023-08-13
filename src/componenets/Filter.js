import React, { useContext } from 'react'
import ElementsContext from '../context/ElementContext'

export default function Filter() {

    const { setElements, NoFiltreds} = useContext(ElementsContext)


    const handleFilter = (event) => {
        event.preventDefault();

        const minPrice = parseFloat(event.target.min_price.value);
        const maxPrice = parseFloat(event.target.max_price.value);

        const filtered = NoFiltreds.current.filter(
            (NoFiltred) => NoFiltred.price >= minPrice && NoFiltred.price <= maxPrice
        ); 

        setElements(filtered)

    };
    
    return (
        <div className="container border rounded-3 mt-2 px-0">

            <div className="filter-by-header border-bottom p-2">Filter by:</div>

            <form onSubmit={handleFilter}>
                <div className="row m-1">
                    <label for="inputEmail4">Price</label>
                    <div className="col">
                        <input type="number" className="form-control " placeholder="Min price" name="min_price" />
                    </div>
                    <div className="col">
                        <input type="number" className="form-control " placeholder="Max price" name="max_price" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Filter</button>
                </div>
            </form>

        </div>
    )
}
