import { useParams } from 'react-router-dom';
import db from '../db';
import { useState, useEffect } from 'react';

function ShowGuests(){
    const[inventes, setInfo] = useState([])
    let { inventId} = useParams();
    useEffect(function(){
        db.collection("guests").where('inventId', '==', inventId).get().then((querySnapshot) => {
 
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
                    Guest
                </th>
                <th>
                    Invent Id
                </th>
                <th>
                    Is Coming
                </th>
                <th>
                    Count
                </th>
            </tr>
            {inventes.map(function(data){
                return(
                    <tr key={data.inventId}>
                        <td>
                            {data.name}
                        </td>
                        <td>
                            {data.inventId}
                        </td>
                        <td>
                            {data.isComing ? 'Yes': 'No'}
                        </td>
                        <td>
                            {data.count}
                        </td>
                    </tr>
                )
            })}
        </table>
    )
}

export default ShowGuests;