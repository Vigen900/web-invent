import db from '../db';


function ShowInvents(){
    db.collection("invents").get().then((querySnapshot) => {
 
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach(element => {
            var data = element.data();
            // setInfo(arr => [...arr, data]);
            console.log(data)
        });
    })

    return(
        <div>
            list
        </div>
    )
}

export default ShowInvents;