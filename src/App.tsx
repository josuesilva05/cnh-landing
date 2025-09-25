import Hero from './components/Hero'
import InteractiveDemo from './components/InteractiveDemo'
import Features from './components/Features'
import UseCases from './components/UseCases'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen text-white font-inter bg-hero-harmony">
      <Hero />
      <main>
        <Features />
        <UseCases />
        <InteractiveDemo />
      </main>
      <Footer />
    </div>
  )
}

export default App