import React from 'react'
import Hero from './components/Hero'
import Resume from './components/Resume'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Resume />
    </div>
  )
}

export default App
