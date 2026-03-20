// Import both 'login' functions but give them unique aliases

/*
import { login as loginWithGoogle } from './utils/googleAuth.js';
import { login as loginWithGithub } from './utils/githubAuth.js';

console.log("--- Multi-Auth System ---");

// Now we can use both without any confusion
loginWithGoogle();
loginWithGithub();

console.log("\nConflict resolved using 'as' aliases!");

*/

import * as Google from './utils/googleAuth.js';
import * as GitHub from './utils/githubAuth.js';

Google.login();
GitHub.login();