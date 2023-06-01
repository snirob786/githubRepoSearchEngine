const axios = require("axios")

const getRepos = async (query) => {
    let gitToken = process.env.GITHUB_TOKEN
    let baseUrl = process.env.GITHUB_API_URL
    query = encodeURIComponent(query)
    try {
        let gitRepos = await axios.get(`${baseUrl}/search/repositories?q=${query}&per_page=20`, {
            headers: {
                Authorization: `Bearer ${gitToken}`,
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        return gitRepos.data.items
    } catch (error) {
        console.log(error);
    }
}

const getContributors = async (repo) => {
    let gitToken = process.env.GITHUB_TOKEN
    let baseUrl = process.env.GITHUB_API_URL
    let owner = repo.owner.login
    let repoName = repo.name
    try {
        let getContributors = await axios.get(`${baseUrl}/repos/${owner}/${repoName}/stats/contributors`, {
            headers: {
                Authorization: `Bearer ${gitToken}`,
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        return getContributors
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getRepos,
    getContributors
}