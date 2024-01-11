'use client'

import React, { useState, useEffect } from 'react'
import Loading from './components/animations/Loading'
import Navbar from './components/navbar/Navbar'
import Buttons from './components/navbar/Buttons'
import Home_Page from './components/home_page/Home_Page'
import Home_Page_Images from './components/home_page/Home_Page_Images'

export default function Home() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 4000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <main>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Navbar />
                    <Buttons />
                    <Home_Page />
                    <Home_Page_Images />
                </>
            )}
        </main>
    )
}