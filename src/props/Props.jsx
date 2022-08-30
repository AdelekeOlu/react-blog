import React from 'react'
import '../component/navbar.scss'

const Props = ({names, sum}) => {
    
    return (
        <div>
            <h1>My name is { names }</h1>
            <h1>{sum(5,8)}</h1>
        </div>
    )
}

export default Props