import React from 'react';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function Content() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      description: 'Hp Envy laptop'
    },
    {
      id: 2,
      checked: false,
      description: 'Asus 360 revolve laptop'
    },
    {
      id: 3,
      checked: true,
      description: 'Dell x120 laptop' 
    }
  ])
  const handleCheck = id => {
    console.log(`Key: ${id}`)
  }
  
  return (
    <main>
      <ul>
       {
        items.map(item => (
          <li className='item' key={ item.id }>
            <input 
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked= { item.checked }
            />
            <label>{ item.description }</label>
            <FaTrashAlt
             role="button" 
             tabIndex="2"
             />
          </li>
        ))
       }
      </ul>
    </main>
  )
}

export default Content