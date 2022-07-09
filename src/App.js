import NavBar from "./components/NavBar";
import {useState} from "react";

import './styles/App.css'
import CardList from "./components/CardList";


function App() {
    const [cards, setCard] = useState([
        {id: 1, title: 'React', body: 'lorem25'},
        {id: 2, title: 'React', body: 'lorem25'},
        {id: 3, title: 'React', body: 'lorem25'},
        {id: 4, title: 'React', body: 'lorem25'},
        {id: 5, title: 'React', body: 'lorem25'}
    ])
  return (
    <div className="App">
        <NavBar/>
        <CardList cards={cards}/>
    </div>
  );
}

export default App;
