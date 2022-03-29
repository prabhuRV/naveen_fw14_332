import React, { useEffect, useState } from 'react'
import { TimerInput } from './timerInput'

export function Timer() {
    const [start,setStart]= useState(0)
    const [initial, setInitial]= useState()
    const [end, setEnd]= useState(0)
    function Getvalue(s,e){
   
        // if(s>e){
        //     alert("enter valid time limit");
        //     return
        // }
        if(s==="" || e==="" ){
            alert("enter valid time limit");
            return
        }
        if(+s<+e){
           setStart(+s)
           setInitial("k")
           setEnd(+e)
         
        }
        else{
            alert("enter valid time limit");
            return
        }
    }
   //    console.log(intial)
    useEffect(()=>{
        if(initial){
           let tin = setInterval(()=>{
                setStart((prev)=>{
                    if(prev>=end){
                        clearInterval(tin)
                        return "Out"
                    }
                    return ++prev
                })
               
            },1000)
            return ()=>{
                clearInterval(tin)
                console.log("test")
            }
        }
    },[initial]);

  return (
    <div className='w-25 text-center'>
        <TimerInput send={Getvalue} />
        <div>
           <h3> Timer: {start}</h3>
        </div>
       
    </div>
  )
}
