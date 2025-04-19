import React, { useEffect, useState } from 'react';
import Header from './Header'
import Books from '../Books/Books';
const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return (
        <div className='h-full py-4'>
            <Header />  
            <Books data={data}/>
        </div>
    );
};

export default Home;