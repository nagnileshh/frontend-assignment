import {useEffect, useState} from 'react';
import axios from 'axios';
import Post from './Post';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    async function renderElements(){
      axios.get('https://animall-backend-assesment.herokuapp.com/data')
      .then(res => {
        console.log(typeof(res.data.data[0].animalType));
        const newData = res.data.data;
        setData(newData);
      })
    }
    renderElements();
  },[])
  return (
    <div className="App">
      <div className="holder">
      {data.map((post,index) => {
          return (<Post key={index} data={post} />)
        }) 
      }
      </div>
    </div>
  );
}

export default App;
