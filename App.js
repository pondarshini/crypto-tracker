import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import ImageCard from './components/ImageCard';

function App() {
  const [currencyList,setCuurencyList]= useState([]);
  const [search,setSearch]=useState('');
  const handleSearch=(e) =>setSearch(e.target.value);
  useEffect(()=>{
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then((response)=>setCuurencyList(response.data));
  },[])
  return (
    <div className="App">
      <div className="header" p-2>
        <h2>Cryptocurrency tracking</h2>
        <div className="row justify-content-center mt-2">
          <div className="col-xs-12 sm-12 col-md-6 col-lg-5 col-xl-4 mt-3">
          <input class="form-control me-2" type="search" 
          placeholder="Search" 
           aria-label="Search"
           onChange={handleSearch}></input>
          </div>

        </div>
        

      </div>
      <div className='p-5 content d-flex flex-wrap justify-content-center'>
        {
          currencyList
          .filter((currency)=> currency.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((currency)=>( <ImageCard{...currency}/>))
        }
      </div>
    </div>
  );
}

export default App;
