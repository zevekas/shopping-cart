import { Outlet } from "react-router"
import Header from "./components/Header.jsx"
import { ProductContext } from './components/ProductContext.jsx'
import useData from "./components/getData.js"
import { useState } from "react";

function App() {
  const data = useData();
  const [count, setCount] = useState(new Map());

  const handleClick = (type, id) => {
    setCount(prev => {
      const newMap = new Map(prev);

      const curr = (newMap.get(id) || 0);

      if (type === 'add') {
        newMap.set(id, curr + 1);
      } else if (type === 'remove' && curr > 0) {
        newMap.set(id, curr - 1);
      }

      return newMap;
    });
  }

  return (
    <ProductContext value={data} >
      <Header count={count} />
      <Outlet context={{ handleClick, count }} />
    </ProductContext>
  )
}

export default App
