import React from "react"
 
export function Sum ({numbers = [10, 5 ,20]}){
    return <h1>The sum is: {numbers.reduce((prevValue, currentValue) => prevValue + currentValue , 0)}</h1>
}