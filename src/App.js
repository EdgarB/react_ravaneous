import './App.scss';
import BusinessList from './Components/BusinessList';



function App() {
  return (
    <div className="c-app">
      <h1>Welcome to Ravenous!</h1>
      <p>Here you'll find the best restaurants recomendations depending on your area!</p>
      
      <BusinessList/> 
    </div>
  );
}

export default App;
