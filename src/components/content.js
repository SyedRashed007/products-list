import React from 'react'
import { useEffect } from 'react';

function Content() {
    const fetchData = () => {
        fetch('../data/data.json').then(resp => {
            return resp.json();
        }).then(data => {
            console.log(data)
        }).catch(err => {
            console.log("Error is", err)
        })
    }
    useEffect(() => {
        fetchData();
    })
    return (
        <div>
           Main Content 
        </div>
    )
}

export default Content
