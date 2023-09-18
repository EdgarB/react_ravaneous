import './App.scss';
import BusinessList from './Components/BusinessList';
import SearchBar from './Components/SearchBar';
import headerImg from './header.jpg';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="c-app">
      <NavBar/>
      <div className='c-app__header'>
        <img src={headerImg} className='c-app__header-img'/>
        <div className='c-app__header-img-credit'>
          Foto de <a href="https://unsplash.com/es/@nadineprimeau?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nadine Primeau</a> en <a href="https://unsplash.com/es/fotos/-bLkT8wGV0I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </div>
        <div className='c-app__header-content'>
          <SearchBar/>
        </div>
      </div>
      <div className='c-app__body'>
        <BusinessList/>
      </div>
    </div>
  );
}

export default App;
