import React from 'react'

const RepoCover = ({ data }) => {

    const { name, language, stargazers_count, html_url, homepage } = data

    return (
        <div className="border-2 rounded-xl w-96 m-2 pb-2 px-3">
            <div className="card-body">
                <h2 className="text-black card-title">{name}
                </h2>

                <div className="w-full flex flex-col">
                    <div className="stat bg-transparent">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                        </div>
                        <div className="stat-title text-gray-900 font-bold">Total Star</div>
                        <div className="stat-value text-primary">{stargazers_count}</div>
                    </div>
                </div>

            </div>
            <div className="card-actions flex justify-between">
                {language ? <div className="badge mx-2 badge-error">{language}</div> : <div className="badge mx-2 badge-error">Other</div>}
                <a href={html_url} target="_blank">
                    <button className="bg-green btn border-0 rounded-xl">Visit</button>
                </a>
            </div>
        </div>
    )
}

export default RepoCover
