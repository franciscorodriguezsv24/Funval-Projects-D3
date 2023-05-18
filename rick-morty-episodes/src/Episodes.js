import React, {useEffect, useState} from "react";
import axios from 'axios'


function Episodes (){

    const [data, setData] = useState([]);

    useEffect(() =>{
        axios.get('https://rickandmortyapi.com/api/episode')
        .then(response => {setData(response.data.results)
        })
        .catch(error => {
            console.error('Error no se pudo establecer la conexion', error);
        })
    }, []);

    return(
<>
<table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Episode's name</th>
      <th scope="col">Air date</th>
      <th scope="col">Episode</th>
    </tr>
  </thead>
  <tbody>
   
    {data.map(item => (
    <tr>
      <th scope="row" key={item.id}>{item.id}</th>
      <td>{item.name}</td>
      <td>{item.air_date}</td>
      <td>{item.episode}</td>
    </tr>
    )
    )}
      
   
  </tbody>
</table>
</>
    )
}

export default Episodes