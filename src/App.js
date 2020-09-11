import React from 'react';
import GradientsHeader from './components/GradientsHeader.js'
//import GradientsList from './components/GradientsList.js'
import Footer from './components/Footer.js'
// import logo from './logo.svg'
// import './App.css'
import gradients from "./gradients"

function App() {
  return (
    <>
      <header className="App-header">
        <GradientsHeader list={gradients} />
      </header>
      <main>
        <div className="container my-4">
        <h1 className="text-center">React Alyra Gradients</h1>
        { /*<GradientsList list={gradients} />*/}    
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}


export default App;