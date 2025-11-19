// import React, { useState } from 'react';
import React, {useState, useEffect}  from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

export function App() {
  // estado equivalente a this.state
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

useEffect(() =>{
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>
       response.json())
    .then(users=>
      {setRobots(users)})
  },[])


  //handler moderno
  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
    // console.log(event.target.value); // si quieres ver el valor en consola
  };


  //filtrado usando el estado
  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  );
  
  return(!robots.length) ? 
    <h1 className='tc'>LOADING</h1> :
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
     
};

export default App; 