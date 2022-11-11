import './App.css';
import Header from './Components/Header'
import Hero from './Components/Hero'
import Card from './Components/Card'
import data from './data.js'

function App() {
  const dataArr = data.map(item => {
    return (
      <Card img = {item.coverImg} rating = {item.stats.rating} reviewCount = {item.stats.reviewCount} country = {item.location} title = {item.title} price = {item.price} />
    )
  })

  return (
   <div>
    <Header />
    <Hero />
    {dataArr}
   </div>
  );
}

export default App;
