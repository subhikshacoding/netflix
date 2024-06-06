import { Feature } from '../../component/features/Feature'
import Navbar from '../../component/navbar/Navbar'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Feature type="movie"/>
        </div>

  )
}

export default Home