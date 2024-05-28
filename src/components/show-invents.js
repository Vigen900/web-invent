import db from '../db';
import { useState, useEffect } from 'react';

function ShowInvents(){
    const[inventes, setInfo] = useState([])
    useEffect(function(){
        db.collection("invents").get().then((querySnapshot) => {
 
            // Loop through the data and store
            // it in array to display
            var data = []
            querySnapshot.forEach(element => {
                data.push(element.data())  
                console.log(data)
            });
            setInfo(data);
        })
    },[])
    

    return(
        
        <table border={1} cellPadding={20} cellSpacing={0}>
            <tr>
                <th>
                    Customer
                </th>
                <th>
                    Invent Id
                </th>
                <th>
                    Customer_Phone
                </th>
            </tr>
            {inventes.map(function(data){
                return(
                    <tr key={data.inventId}>
                        <td>
                            {data.customer}
                        </td>
                        <td>
                            {data.inventId}
                        </td>
                        <td>
                            {data.customer_phone}
                        </td>
                    </tr>
                )
            })}
        </table>
    )
}

export default ShowInvents;