import Head from 'next/head'
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {

  const router = useRouter()
  const [username, setUsername] = useState()


  const onFinish = async (e) => {
    e.preventDefault()
    console.log('Received values of form: ', username);
    router.push(`/user/${username}`)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>DEV Profiler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative h-screen w-full flex justify-center items-center flex-col">
        <div className="w-full flex justify-center items-center flex-col">
          <img src="/github.svg" alt="" height={200} width={200} />
          <h1 className="my-6 font-bold text-2xl">Find your DEV Profile</h1>
          <form onSubmit={onFinish} className="form-control">
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="github username" className="input sm:input-lg input-success input-bordered w-72 sm:w-96" />
          </form>
        </div>
        {/* <div className="absolute bottom-0 right-0 h-16 w-16 bg-green rounded-2xl flex justify-center items-center">
          <img src="/github_gray.svg" alt="" height={50} width={50} />
        </div> */}
        <footer className="flex flex-col justify-center items-center absolute bottom-0 my-6">
          <p>Built using Nextjs, GitHub REST Api and tailwindCSS</p>
        <h1>Give it a ⭐ <a target="_blank" className="underline text-blue-500" href="https://github.com/mukulrajpoot262610/github_profiler">here</a></h1>
        </footer>
      </main>

    </div>
  )
}
