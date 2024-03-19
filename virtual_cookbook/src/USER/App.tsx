import { useState } from 'react'


import RecipePage from "../COMPONENTS/RecipePage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <RecipePage recipeName={"Mexican Rice Casserole"}/>
  )
}

export default App;
