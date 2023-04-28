import './CustomCss.css'
// import './App.css';
import FirstSection from './components/FirstSection';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieRow from './components/MovieRow';

function App() {
  return (
    <div className="App">
      <Header/>
      <FirstSection/>
      <MovieRow query="star%20wars" title="Star Wars"/>
      <MovieRow query="harry%20potter" title="Harry Potter"/>
      <MovieRow query="marvel" title="Film Marvel"/>
      <Footer/>
    </div>
  );
}

export default App;
