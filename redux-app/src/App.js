import './App.css';
import React from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <Form />
      </main>
    </>
  );
}

export default App;
