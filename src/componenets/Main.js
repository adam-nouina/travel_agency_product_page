import Header from './Header';
import Elements from './Elements';
import Search from './Search';
import Filter from './Filter';

export default function Main() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-3'>
                    <Search />
                    <Filter />
                </div>
                <div className='col-9'>
                    <Header />
                    <Elements />
                </div>
            </div>
        </div>
    );
}