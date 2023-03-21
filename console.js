// Require the "simple-git" package
const simpleGit = require('simple-git');

// Initialize a new Git repository
const git = simpleGit();
git.init();

// Add a new file to the repository
git.add('./*');

// Commit the changes
git.commit('Initial commit');

// Set the remote repository URL
git.addRemote('origin', 'https://github.com/your-username/your-repo.git');

// Push the changes to the remote repository
git.push('origin', 'master');
