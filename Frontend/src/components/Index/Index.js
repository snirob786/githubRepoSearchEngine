import { useState } from 'react';
import Search from '../shared/Search';
import './index.css'
import Repo from '../shared/Repo';
import Spinner from '../shared/Spinner';

const Index = () => {
    const [repositories, setRepositories] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className="container">
            <div className='searchContainer'>
                <Search setRepositories={setRepositories} setIsLoading={setIsLoading}></Search>
            </div>
            <div className='repo-container'>
                {
                    repositories ?
                        repositories.map((repo, index) => {
                            return (
                                <Repo key={index} repo={repo}></Repo>
                            )
                        })
                        :
                        <>
                            {
                                isLoading ?
                                    <Spinner></Spinner>
                                    :
                                    "Please search to load content"

                            }
                        </>
                }
            </div>
        </div >
    );
}

export default Index;