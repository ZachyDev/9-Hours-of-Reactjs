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
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
    localStorage.setItem('shopping-list', JSON.stringify(listItems));
  }
  
  // delete item
  const handleDelete = id => {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shopping-list', JSON.stringify(listItems));
  }
  return (
    <main>
      { items.length ? (
        <ul>
        {
          items.map(item => (
            <li className='item' key={ item.id }>
              <input 
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked= { item.checked }
              />
              <label
              style={ item.checked ? {
                textDecoration: 'line-through'
              } : null}
                onDoubleClick={ () => handleCheck(item.id) }
              >{ item.description }</label>
              <FaTrashAlt
              onClick={ () => handleDelete(item.id)}
              role="button" 
              tabIndex="2"
              />
            </li>
          ))
        }
        </ul>
      ) : (
        <p  style={{
          marginTop: '2rem'
        }}>Your list is empty.</p>
      )}
    </main>
  )
}

export default Content