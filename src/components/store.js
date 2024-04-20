import TemplateList from './template-list';
import InventHeader from './invent-header';
import BarList from './bar-list';
import { useState } from 'react';

function Store(){
    const [selectedType, setSelectedType] = useState('cnund')
    function handleChange(event){
        setSelectedType(event.target.value)
    }
    return(
        <div>
            <InventHeader></InventHeader>
            <BarList handleChange = {handleChange}></BarList>
            <TemplateList selectedType = {selectedType}></TemplateList>
        </div>
    )
}


export default Store;