import logo from './logo.svg';
import './App.css';
import BusinessList from './Components/BusinessList';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
      <BusinessList />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
    </div>
  );
}

export default App;
