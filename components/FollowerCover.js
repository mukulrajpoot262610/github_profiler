import React, { useState, useEffect } from 'react'

const FollowerCover = ({ data }) => {

    const { avatar_url, followers_url, following_url, html_url, login } = data;

    return (
        <div className="w-96 h-28 m-2 p-4 border-2 flex rounded-xl items-center">
            <div className="avatar">
                <div className="w-20 h-20 mask mask-squircle">
                    <img src={avatar_url} />
                </div>
            </div>
            <a href={html_url}>
                <div className="card-body">
                    <h2 className="card-title">{login}</h2>
                    <div className="w-full lg:w-6/12 my-6 shadow flex flex-col lg:flex-row">
                    </div>
                </div>
            </a>
        </div>
    )
}

export default FollowerCover
