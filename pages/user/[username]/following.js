import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import FollowerCover from '../../../components/FollowerCover';

const Following = () => {

    const router = useRouter()
    const [followerData, setFollowerData] = useState();

    const username = router.query.username;
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.github.com/users/${username}/following`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const data = await res.json()

            setFollowerData(data)
        }

        username && fetchData()
    }, [username])

   console.log(username)
   console.log(followerData)
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Head>
                <title>DEV | {username} Following</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="relative w-full flex justify-center items-center flex-col">
                <h1 className="my-6 text-2xl"><span className="text-green" >@{username}</span> Following</h1>
                {
                    followerData ? (
                        <div className="p-4 flex flex-wrap">
                        {
                            followerData?.map((e) => <FollowerCover data={e} />)
                        }
                        </div>
                    ) : "Loading..."
                }
            </main>
            
        </div>
    )
}

export default Following
