import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
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
    <div className="App">
      {/* Header component */}
      <Header 
      title="Mama Mboga App"
      />
      {/* Content component */}
      <Content 
      items = { items }
      handleCheck = { handleCheck } 
      handleDelete = { handleDelete }
      />
      {/* Footer component */}
      <Footer
       length = { items.length }
      />
    </div>
  );
}

export default App;
