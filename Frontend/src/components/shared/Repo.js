
const Repo = (props) => {
    let repo = props.repo
    return (
        <>
            <div className="repoContainer">
                <div className="repoContent">
                    <div className="repoLeft">
                        <h3 className="repoName"><a href={repo.url}>{repo.name}</a></h3>
                        <p className="repoAuthor">{repo.author}</p>
                        <p>{repo.description}</p>
                    </div>
                    <div className="repoRight">
                        <p><span className="header">Most Active Contributor: </span><span className="topContributor">{repo.topContributorUsername}</span></p>
                        <div className="contributionContinaer">
                            <p><span className="header">{repo.topContributorAdditions} </span><span className="contributorText"> additions</span></p>
                            <p><span className="header">{repo.topContributorDeletions} </span><span className="contributorText"> deletion</span></p>
                            <p><span className="header">{repo.topContributorCommits} </span><span className="contributorText"> commits</span></p>
                        </div>
                    </div>
                </div>
                <div className="repoFooter">
                    <p className="repoLanguage">{repo.language}</p>
                    <p className="updateDate"> Updated on {new Date(repo.updatedAt).toLocaleDateString('en-US', {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })}</p>
                </div>
            </div>
        </>
    );
}

export default Repo;