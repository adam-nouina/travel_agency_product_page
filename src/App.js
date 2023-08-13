import './App.css';
import Create from './componenets/Create';
import Edit from './componenets/Edit'; 
import Main from './componenets/Main';
import Show from './componenets/Show';
import HomeForm from './componenets/HomeForm';
import { Route, Routes } from 'react-router-dom';
import { ElementProvider } from './context/ElementContext';

function App() {
  return (
    <ElementProvider>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/:id/edit' element={<Edit/>}/>
        <Route path='/create' element={<Create />} />
        <Route path='/:id/show' element={<Show />} />
        <Route path='/form' element={<HomeForm />} />
      </Routes>
    </ElementProvider>
  );
}

export default App;