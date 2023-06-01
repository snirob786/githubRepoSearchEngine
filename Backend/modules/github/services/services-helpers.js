const findMaxContributor = (contributors) => {
    try {
        contributors = contributors.map(contributor => {

            let totalContribution = contributor.weeks.reduce((accumulator, currentValue) => accumulator + (currentValue.a + currentValue.d + currentValue.c),
                0)
            let totalAddition = contributor.weeks.reduce((accumulator, currentValue) => accumulator + currentValue.a,
                0)
            let totalDeletions = contributor.weeks.reduce((accumulator, currentValue) => accumulator + currentValue.d,
                0)
            let totalCommits = contributor.weeks.reduce((accumulator, currentValue) => accumulator + currentValue.c,
                0)
            contributor.totalContribution = totalContribution
            contributor.topContributorAdditions = totalAddition
            contributor.topContributorDeletions = totalDeletions
            contributor.topContributorCommits = totalCommits
            return contributor
        });

        let maxContributor = null;
        let maxValue = -Infinity;

        for (let i = 0; i < contributors.length; i++) {
            if (contributors[i].totalContribution > maxValue) {
                maxContributor = contributors[i];
            }
        }

        return maxContributor;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    findMaxContributor
}