import React from 'react';
import Navbar from "./components/navbar/navbar";
import Search from "./components/search/search"
import Employees from './components/employees/employees';

function App() {
  return (
    <>
    <Navbar />
    <Search />
    <Employees />
    </>
  );
}

export default App;
