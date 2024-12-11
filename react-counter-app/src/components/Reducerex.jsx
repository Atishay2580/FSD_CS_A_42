import React, { useReducer } from 'react'

const Reducerex = () => {
    const initialValue = {name: "xyz", age: "25"}
    const[state, dispatch] = useReducer(reducer,initialValue)

    function reducer(state,action) {
        switch(action.type) {
            case "update-name": 
                return {name: "abc", age: state.age}
            case "update-age":
                return {name: state.name, age: 20}
            case "reset":
                return {name: "xyz", age: 25}
            default:
                throw new Error("unexpected action")
        }
    }

    return (
        <div>
            <h1>UseReducer Example</h1>
            <h1>Name: {state.name}</h1>
            <h1>Age: {state.age}</h1>
            <button onClick={() => dispatch({type: "update-name"})}>Update Name</button>
            <button onClick={() => dispatch({type: "update-age"})}>Update Age</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
        </div>
    )
}

export default Reducerex