import './App.scss';
import BusinessList from './Components/BusinessList';
import SearchBar from './Components/SearchBar';
import headerImg from './header.jpg';


function App() {
  return (
    <div className="c-app">
      <div className='c-app__header'>
        <img src={headerImg} className='c-app__header-img'/>
        <div className='c-app__header-content'>
          <h1 className='c-app__title'>Welcome to Ravenous!</h1>
          <p className='c-app__description'>Here you'll find the best restaurants recomendations depending on your area!</p>
          <SearchBar/>
          Foto de <a href="https://unsplash.com/es/@nadineprimeau?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nadine Primeau</a> en <a href="https://unsplash.com/es/fotos/-bLkT8wGV0I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </div>
      </div>
      <div className='c-app__body'>
        <BusinessList/>
      </div>
    </div>
  );
}

export default App;
