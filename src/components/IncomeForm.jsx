import { useRef } from "react"
import React from 'react'

const IncomeForm = ({list, setList}) => {

    const desc = useRef(null)
    const date = useRef(null)
    const price = useRef(null)


    const handleClick = e => {
        e.preventDefault();
        let d = date.current.value.split('-')
        let newD = new Date(d[0], d[1], d[2])

        setList([...list, {
            'desc': desc.current.value,
            'price': price.current.value,
            'date': newD.getTime(),
        }]);

        desc.current.value = null
        price.current.value = null;
        date.current.value = null;
        console.log(typeof list)
        console.log(list, list.length)
    }

  return (
    <form onSubmit={handleClick}>
        <section className="form-section" >
            <h2 className="heading-main">Income Tracker</h2>
            <input type="text" name="desc" id="desc" placeholder='Income description' ref={desc}/>
            <input type="text" name="price" id="price" placeholder='Amount' ref={price}/>
            <input type="date" name="date" id="date" ref={date}/>
            <input type="submit" value="Add Income" />
        </section>
    </form>
  )
}

export default IncomeForm