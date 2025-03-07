import React, { useState } from 'react'
import { Button } from './components/ui/button'

const App = () => {
  const [count, setcount] = useState(0)

  return (
    <div className='flex flex-col gap-4 h-screen w-screen justify-center items-center'>
      <p className='text-2xl'>
        Boilerplate of React Js 19 with vite v6, Tailwind v4 and Shadcn ui
      </p>
      <Button onClick={() => setcount((prev) => prev + 1)} size='lg'>
        Count {count}
      </Button>
    </div>
  )
}

export default App
