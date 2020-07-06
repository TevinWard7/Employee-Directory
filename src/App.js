import React from 'react';
import Navbar from "./components/navbar/navbar";
import Search from "./components/search/search"
import EmployeeList from './components/employeeList/employeeList';

function App() {
  return (
    <>
    <Navbar />
    <Search />
    <EmployeeList />
    </>
  );
}

export default App;
