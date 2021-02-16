import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Gains = () => {
    const [stocks, useStocks] = useState([])

    const GetStocks = async () => {
        const emptystr = ''
        const res = await axios.get('/api/gains', {headers : {}, crossdomain: true})
        console.log(res.data.data.children)
        useStocks(res.data.data.children.filter(post => post.data.selftext != emptystr))
    }
    
    useEffect(() => {
        GetStocks();
    }, [])

    return (
        <div>
            {stocks.map(post => <div>{post.data.selftext}<div><br></br></div></div>)}
        </div>
    )
}


export default Gains
