import { useState, useEffect } from 'react'
import './App.css'
import IncomeForm from './components/IncomeForm'
import DisplayList from './components/DisplayList'

function App() {
  const [income, setIncome] = useState(0)
  const [list, setList] = useState([])

  // useEffect(() => {
  //   let temp = 0;
  //   for (let i = 0; i < list.length; i++){
  //     temp += parseInt(list[i].price)
  //     console.log(list[i].price)
  //   }

  //   setList(temp)
  // }, [list])
  
  return (
    <div className="App">
      <div className="grid">
      <IncomeForm list={list} setList={setList}/>
      <DisplayList income={income}/>
      {(list.length > 0) ? list[0].desc : ''}
      </div>
    </div>
  )
}

export default App
