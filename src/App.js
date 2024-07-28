import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import SinglePage from './Pages/SinglePage';
import Error from './Pages/Error';
import Header from './Components/Header';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='single/:id' element={<SinglePage />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
