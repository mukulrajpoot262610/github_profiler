import React, { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Dashboard = () => {

    const router = useRouter()

    const username = router.query.username;

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.github.com/users/${username}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const data = await res.json()

            console.log(data)
        }

        username && fetchData()
    }, [username])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Head>
                <title>DEV | {username}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

        </div>
    )
}

export default Dashboard
