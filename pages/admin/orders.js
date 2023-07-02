import React,{useEffect} from 'react';

import {db,app} from "../../firebase/firebaseconfig"
import {ref as sref,onValue} from "firebase/database"

export default function Orders() {

    useEffect(()=>{

        const dbref1 = sref(db,'Orders');
        onValue (dbref1, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot => {
            let keyName= childSnapshot.key;
            let data = childSnapshot.val();
            records.push({"key": keyName, "data": data});
            
            });
            });

            console.log(records);
    },[]);

    

    return(
        <>
        <div className="mt-24">
            <h1 className="mt-8">In orders page</h1>
            <div>
                <p>Need to display the orders </p>
            </div>
        </div>
        
        </>
    )
}