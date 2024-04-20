import logo from './logo.svg';
import './App.css';
import TemplateList from './components/template-list';
import InventHeader from './components/invent-header';
import BarList from './components/bar-list';
import { useState } from 'react';
import InventParent from './components/invent-parent'

function App() {
  const [selectedType, setSelectedType] = useState('cnund')
  function handleChange(event){
    setSelectedType(event.target.value)
}
  return (
    <div className="App">
      <InventHeader></InventHeader>
      <BarList handleChange = {handleChange}></BarList>
      <TemplateList selectedType = {selectedType}></TemplateList>
    </div>
  );
}

export default App;
