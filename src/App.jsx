import { useState } from 'react'
// COMPONENTES
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// CSS
// import './App.css'
// BOOSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
	const [count, setCount] = useState(0);
	
  const addCount = () => {
		setCount(count + 1);
	}
	
  return (
      <div>
          <NavBar />
          <ItemListContainer greeting="Electronics"/>
          <label>{count}</label>
          <button onClick={addCount}> +1 </button>
      </div>
	)
}

export default App
