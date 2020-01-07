import React, { useEffect } from 'react'


const Texty = () => {
    useEffect(() => {
        console.log('loaded')
    },[])
    return (
        <>
        <h1>i'am now loaded!</h1>
        </>
    )
}

export default Texty