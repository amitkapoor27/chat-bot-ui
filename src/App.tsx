import React from 'react';
import Chatbot from "./Components/Chatbot/Chatbot";
import Footer from './Components/Layouts/Footer';
import Header from './Components/Layouts/Header';


const App: React.FC = () => {
  return (
    <div className='App'>
      <Header username='Sheena'/>
      <Chatbot />
      <Footer/>
    </div>
  );
};

export default App;
