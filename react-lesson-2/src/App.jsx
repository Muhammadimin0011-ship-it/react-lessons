import './App.css'
import Card from './Card.jsx'
import GreeetingCard from './GreetingCard.jsx'
import Btn from './Buttons.jsx'

function App() {


  return (
    <>
      <h1>Mening ismim Muhammademin</h1>
      <h2>Familiyam mamateminov</h2>
      <p>Men kelajakda Frontend engener dasturchi bolmoqchiman</p>

      <GreeetingCard />


      <Card  name='React'/>
      <Card  sar='React bu javascript kurubxonasi'/>




      <Card  name='Javascript'/>
      <Card  sar='javascript bu xaqiqiy dasturlash tili'/>



      <Card  name=''/>
      <Card  sar='React bu javascript kurubxonasi'/>

      <button onClick={Btn} className='btn'>Bosil</button>
    </>
  )
}

export default App
