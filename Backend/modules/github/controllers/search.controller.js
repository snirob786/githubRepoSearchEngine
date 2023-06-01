/**
 * User CRUD Controller
 * 
 * @by nirob
 * @since 1.0
 */

/* Router Methods */
const gitServices = require('../services/services')
const serviceHelpers = require("../services/services-helpers")

exports.Index = async (req, res, next) => {
    let search = req.query.q
    try {
        let gitRepos = await gitServices.getRepos(search)
        const getRepositoriesPromises = []
        for (let i = 0; i < gitRepos.length; i++) {
            let repo = gitRepos[i]
            let getContributors = await gitServices.getContributors(repo)
            let maxContributor = serviceHelpers.findMaxContributor(getContributors.data)
            let organizedRepo = {
                name: repo.name,
                author: repo.owner.login,
                description: repo.description,
                updatedAt: repo.updated_at,
                language: repo.language,
                topContributorUsername: maxContributor?.author.login,
                topContributorAdditions: maxContributor?.topContributorAdditions,
                topContributorDeletions: maxContributor?.topContributorDeletions,
                topContributorCommits: maxContributor?.topContributorCommits,
                url: repo.html_url
            }
            getRepositoriesPromises.push(organizedRepo)
        }
        let repositories = await Promise.all(getRepositoriesPromises);
        return res.json({ data: repositories });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something is wrong", data: error })
        return next(error);
    }

};

