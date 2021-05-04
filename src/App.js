import React, { useState } from 'react';
import axios from 'axios';
import Receipe from './components/Receipe';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [query, setQuery] = useState("");
  const [alert, setAlert] = useState("");
  const [receipes, setReceipes] = useState([]);

  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  async function getData () {
    if(query){
      const result = await axios.get(url);
      if(result && result.data && result.data.hits){
        setReceipes(result.data.hits);
        setQuery("");
        setAlert("");
      } else {
        setAlert("No Results For Receipe Search Criteria.");
      }
    } else {
      setAlert("Please Enter Receipe Search Criteria.");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  }

  return (
    <div className="container">
      <div className="text-center">
      <div className="jumbotron font-weight-bold">
        <h1>Receipe App Search</h1>
      </div>
      {
        alert &&
        <div className="alert alert-danger" role="alert">
          {alert}
        </div>
      }
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" className="form-control" 
            placeholder="Enter Food Here" value={query} onChange={(e) => setQuery(e.target.value)} />
          <div className="input-group-append">
            <input className="btn btn-outline-primary" type="submit" />
          </div>
        </div>
      </form>
      </div>
      <div className="row mt-5">
        {
          receipes.map((receipe) => {
            return (
              <Receipe key={uuidv4()} receipe={receipe} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
