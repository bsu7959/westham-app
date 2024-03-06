import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Pagination from '../components/Pagination';

export default function Home() {
    console.log("home")
    const [presentPage, setPresentPage] = useState(0);
    return <>
        <Header/>
        <Pagination/>
        <h1>Home</h1>
    </>
}