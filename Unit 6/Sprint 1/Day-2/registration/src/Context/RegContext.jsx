import { createContext, useReducer } from "react";
import axios from 'axios'
export const RegContext = createContext();
const initialstate = {
    Name: "",
    Age : "",
    DOB : "",
    Residence: "",
    Address : "",
    Pincode : ""
}
const reducer = (state, action )=> {
    switch(action.type) {
        case "NAME" :
            return {...state, Name: action.payload}
        case "AGE" :
            return {...state, Age: action.payload}
        case "DOB" :
             return {...state, DOB: action.payload}
        case "RESIDENCE" :
            return {...state, Residence: action.payload}
        case "ADDRESS" :
             return {...state, Address: action.payload}
        case "PINCODE" :
             return {...state, Pincode: action.payload}
        default :
        throw new Error()
    }
}
// initialstate.Name ? setCheck(true) : setCheck(false)
export const RegContextProvider = ({children})=> {
       
        const [state, dispatch] = useReducer(reducer, initialstate)
        const {Name,Age,DOB,Residence,Address,Pincode} = state
        const handleSubmit = ()=> {
            axios.post("http://localhost:5004/Users")
            .then()
            .then({Name: "",Age:"", DOB:"",Residence: "", Address:"", Pincode: ""})
            
        }
       
    return (
        <RegContext.Provider value={
            {
                state,
                dispatch,
                Name,
                Age,
                DOB,
                Residence,
                Address,
                Pincode,
                handleSubmit
            }
            }>
            {children}
        </RegContext.Provider>
    )
}