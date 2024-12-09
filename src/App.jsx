
import { useState } from 'react'
import './App.css'

function App() {
  let [color,setColor] = useState('');

  return (
    <>
      <div 
      style={{backgroundColor: color}}
      className=' h-screen w-full flex justify-center '>
        <div className='border-1 border-gray-400 bg-white text-white rounded-3xl px-4 py-2 flex gap-4 fixed bottom-[20px] '>
          <button 
          onClick={() => setColor('violet')}
          className='text-white bg-[violet] rounded-full px-3 py-2 uppercase'>
            violet</button>
          <button 
          onClick={() => setColor('indigo')}
          className='text-white bg-[indigo] rounded-full px-3 py-2 uppercase'>
            indigo</button>
          <button 
          onClick={() => setColor('blue')}
          className='text-white bg-[blue] rounded-full px-3 py-2 uppercase'>
            blue</button>
          <button 
          onClick={() => setColor('green')}
          className='text-white bg-[green] rounded-full px-3 py-2 uppercase'>
            green</button>
          <button 
          onClick={() => setColor('yellow')}
          className='text-white bg-[yellow] rounded-full px-3 py-2 uppercase'>
            yellow</button>
          <button 
          onClick={() => setColor('orange')}
          className='text-white bg-[orange] rounded-full px-3 py-2 uppercase'>
            orange</button>
          <button 
          onClick={() => setColor('red')}
          className='text-white bg-[red] rounded-full px-3 py-2 uppercase'>
            red</button>
        </div>
      </div>
    </>
  )
}

export default App
