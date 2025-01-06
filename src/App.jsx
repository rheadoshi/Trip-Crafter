import './App.css'
import { Button } from './components/ui/button'
import CreateTrip from './components/create-trip'
import { useNavigate } from 'react-router'

function App() {

  const navigate = useNavigate()
  

  return (
    <>
      <div className='text-center'>
        <h1 className='font-extrabold text-4xl p-8'>
          <span className='text-red-400'>Discover Your Next Adventure with AI:</span> 
          <br/>
          Personalized Itenaries at your Fingertips
        </h1>
        <h3 className='text-[#0B6E4F] text-2xl font-bold'>Your personal trip planner and vacation curator,
          <br/>
          tailored to your budget and interests
        </h3>
        <br/>
        <Button className="bg-black text-white self-center font-semibold rounded-xl" onClick={()=>{navigate('/create-trip')}}>Get Started</Button>
      </div>
    </>
  )
}

export default App
