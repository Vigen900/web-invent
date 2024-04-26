import React from "react";
import InventTemplate from './template';
import './template.css'
function TemplateList({selectedType}){
    const templates = [
        {id:'HK101' ,image: 'https://i.ytimg.com/vi/wsXbTEOfO5M/maxresdefault.jpg', price: '35 000 Դրամ', title: 'Մկրտություն', type: 'knunq'},
        {id:'HK102' ,image: 'https://ih1.redbubble.net/image.1734545172.8415/raf,750x1000,075,t,FFFFFF:97ab1c12de.jpg', price: '28 000 Դրամ', title: 'Ատամհատիկ', type: 'atamhatik'},
        {id:'HK103' ,image: 'https://m.media-amazon.com/images/I/61QHJgcimdL._AC_UF1000,1000_QL80_.jpg', price: '30 000 Դրամ', title: 'Ծնունդ', type: 'cnund'},
        {id:'HK104' ,image: 'https://media.istockphoto.com/id/1397574789/photo/together-we-make-the-world-better.jpg?s=612x612&w=0&k=20&c=hZGF9CCheaK-b31DY6hv7TlDB91duMd-dlHYKs604S0=', price: '45 000 Դրամ', title: 'Հարսանիք', type: 'harsaniq'},
    ]
    return(
        
        <div className="boxes">
            
            {templates.map(u =>{
                return u.type == selectedType && <InventTemplate data = {u}></InventTemplate>
            })}
        </div>
    )
}

export default TemplateList;