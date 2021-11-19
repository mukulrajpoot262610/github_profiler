import React, { useState, useEffect } from 'react'

const FollowerCover = ({ data }) => {

    const { avatar_url, followers_url, following_url, html_url, login } = data;
    
    return (
        <div class="w-96 h-28 m-2 p-4 border-2 flex rounded-xl items-center">
            <div class="avatar">
                <div class="w-20 h-20 mask mask-squircle">
                    <img src={avatar_url} />
                </div>
            </div>
            <a href={html_url}>
                <div class="card-body">
                    <h2 class="card-title text-black">{login}</h2>
                    <div class="w-full lg:w-6/12 my-6 shadow flex flex-col lg:flex-row">
                        {/* <div class="stat" onClick={() => setCurrent("Top Repos")}>
                            <div class="stat-figure text-primary">
                                <img src="/repo.svg" alt="" height={40} width={40} />
                            </div>
                            <div class="stat-title">Total Repo</div>
                            <div class="stat-value text-primary">{public_repos}</div>
                        </div> */}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default FollowerCover
