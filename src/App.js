import logo from './logo.svg';
import './App.css';
import './index.css';
import Header from './components/Header/Header';
// import OwlCorousal from './components/OwlCorousal/OwlCorousal';
import HikiNikuRecipe from './components/HikiNikuRecipe/HikiNikuRecipe';
import Footer from './components/Footer/Footer';
import MoreItems from './components/MoreItems/MoreItems';
import Milkits from './components/Milkits/Milkits';
import NewMilkits from './components/NewMilkits/NewMilkits';


function App() {
  return (
    <div className="App">
      <Header/>
      <MoreItems/>
       <HikiNikuRecipe/>
       <Milkits/>
       <NewMilkits/>
     

      <Footer/>
      
    </div>
  );
}



export default App;
