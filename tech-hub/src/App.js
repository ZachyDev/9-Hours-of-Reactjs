import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  // handle name change function
  const handleNameChange = () => {
    const names = [ 'Zachy', 'Monicah', 'Rodgers'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
