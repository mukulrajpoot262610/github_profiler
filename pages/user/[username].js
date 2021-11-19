import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import RepoCover from '../../components/RepoCover'
import FollowerCover from '../../components/FollowerCover'
import Link from 'next/link'

const Dashboard = () => {

    const router = useRouter()
    const [userData, setUserData] = useState();
    const [repoData, setRepoData] = useState();
    const [request, setRequest] = useState()
    const [current, setCurrent] = useState("Top Repos");
    const [error, setError] = useState("Loading...");

    const username = router.query.username;

    console.log("USER", userData)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.github.com/users/${username}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const data = await res.json()

            if (res.status === 403) {
                setError(data.message.split(".")[0])
            } else {
                setUserData(data)
            }

        }

        username && fetchData()
    }, [username])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.github.com/users/${username}/repos`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const data = await res.json()

            setRepoData(data)
        }

        username && fetchData()
    }, [username])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.github.com/rate_limit`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const data = await res.json()

            setRequest(data.rate)
        }

        username && fetchData()
    }, [username])

    console.log(request)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Head>
                <title>DEV | {username}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="relative w-full flex justify-center items-center flex-col">
                {
                    userData ? (
                        <>
                        <div className="absolute top-0 left-0 p-4">
                            <h1 className="text-2xl">{request.limit}/{request.remaining}</h1>
                            <h1 className="uppercase">Request Left</h1>
                        </div>
                            <div className="p-4 w-full container flex flex-col justify-center items-center">
                                <img src={userData.avatar_url} alt="" className="rounded-full mt-12 h-56 bg-green p-2" />
                                <div data-tip={userData.bio} class="tooltip">
                                    <h1 className="mt-6 text-6xl text-center">{userData.name}</h1>
                                </div>
                                <h1 className="my-2 text-3xl text-green">@{userData.login}</h1>

                                <div className="flex items-center">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <h1 className="ml-2 text-xl">{userData.location}</h1>
                                </div>

                                <div class="w-full lg:w-6/12 my-6 shadow flex flex-col lg:flex-row">
                                    <div class="stat" onClick={() => setCurrent("Top Repos")}>
                                        <div class="stat-figure text-primary">
                                            <img src="/repo.svg" alt="" height={40} width={40} />
                                        </div>
                                        <div class="stat-title">Total Repo</div>
                                        <div class="stat-value text-primary">{userData.public_repos}</div>
                                    </div>
                                    <Link href={`/user/${username}/follow`}>
                                    <div class="stat" onClick={() => setCurrent("Followers")}>
                                        <div class="stat-figure text-info">
                                            <img src="/following.svg" alt="" height={40} width={40} />
                                        </div>
                                        <div class="stat-title">Followers</div>
                                        <div class="stat-value text-info">{userData.followers}</div>
                                    </div>
                                    </Link>
                                    <Link href={`/user/${username}/following`}>
                                    <div class="stat" onClick={() => setCurrent("Following")}>
                                        <div class="stat-figure text-info">
                                            <img src="/followers.svg" alt="" height={40} width={40} />
                                        </div>
                                        <div class="stat-title">Following</div>
                                        <div class="stat-value">{userData.following}</div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="flex justify-evenly items-center">
                                    <a href={`https://twitter.com/${userData.twitter_username}`} target="_blank"><i class="fab fa-twitter"></i> Twitter</a>
                                    <a href={userData.html_url} className="my-2 mx-6" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                                    <a href={userData.blog} target="_blank"><i class="fas fa-link"></i> Website</a>
                                </div>
                            </div>

                            <div className="bg-white min-h-screen flex items-start justify-center w-full p-4 pt-12">
                                <div className="container">
                                    <h1 className="text-black font-semibold text-2xl">Showing: {current}</h1>
                                    <div className="my-6 flex flex-wrap justify-center">
                                        {
                                            repoData ? repoData?.sort((a, b) => b.stargazers_count - a.stargazers_count).filter((e, index) => index < 6).map((e) => <RepoCover data={e} />) : "Loading..."
                                        }
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : error
                }
            </main>

        </div>
    )
}

export default Dashboard
