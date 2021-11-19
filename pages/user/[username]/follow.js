import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import FollowerCover from '../../../components/FollowerCover';

const Follow = () => {

    const router = useRouter()
    const [followerData, setFollowerData] = useState();
    const [error, setError] = useState("Loading...");

    const username = router.query.username;
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.github.com/users/${username}/followers`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const data = await res.json()

            if (res.status === 403) {
                setError(data.message.split(".")[0])
            } else {
                setFollowerData(data)
            }
        }

        username && fetchData()
    }, [username])
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Head>
                <title>DEV | {username} Follower</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="relative w-full flex justify-center items-center flex-col">
                <h1 className="my-6 text-2xl"><span className="text-green" >@{username}</span> Followers</h1>
                {
                    followerData ? (
                        <div className="p-4 flex flex-wrap">
                        {
                            followerData?.map((e) => <FollowerCover data={e} />)
                        }
                        </div>
                    ) : error
                }
            </main>
            
        </div>
    )
}

export default Follow
