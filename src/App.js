import React,{useState, useEffect} from 'react';
import axios from 'axios';

import Details from './Details';
import "./app.css"

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='Details'>
      <Details data={data} pageSize={3} />
    </div>
  );
}

export default App;