import { useState } from 'react'

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Header } from './Header'
import { Content } from './Content'
import { Result } from "./Result";
function App() {
  const [EmployeeData, updateEmployeeData] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const mydata = (data) => {
    if (editingEmployee) {
      
      const updatedData = EmployeeData.map((item) =>
        item.email === editingEmployee.email ? data : item
      );
      updateEmployeeData(updatedData);
      setEditingEmployee(null); 
    } else {
      // Add new employee
      updateEmployeeData([...EmployeeData, data]);
    }
  };
  console.log(EmployeeData);

  const Filters = function (data) {
    console.log(data);
    updateEmployeeData(data);
  }
  const handleEdit = (employee) => {
    console.log(employee)
    setEditingEmployee(employee); 
  };
  console.log(editingEmployee)
  return (
    <>
      <Header />
      <Content data={mydata}  editingEmployee={editingEmployee} />
      <Result EmployeeData={EmployeeData} filter={Filters}  handleEdit={handleEdit}/>

    </>
  )
}

export default App
