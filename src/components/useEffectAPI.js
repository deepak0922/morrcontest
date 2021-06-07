import React, { useState, useEffect } from 'react'
import Loading from './Loading.js';
import Movies from './Movies';
import Series from './Series';

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json');
             setLoading(false);
            setUsers(await response.json());
        } catch (error) {
            setLoading(false);
            console.log("my error is "+ error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Movies users={users}/>
            <Series users={users}/>
        </>
    )
}

export default UseEffectAPI