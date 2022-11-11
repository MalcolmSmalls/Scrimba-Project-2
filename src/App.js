import './App.css';
import Header from './Components/Header'
import Hero from './Components/Hero'
import Card from './Components/Card'
import data from './data.js'

function App() {
  const dataArr = data.map(item => {
    return (
      <Card key = {item.id} 
            item = {item} />
    )
  })

  return (
   <div>
    <Header />
    <Hero />
    <section className = "cards">
     {dataArr}
    </section>
   </div>
  );
}

export default App;
