if (localStorage.getItem('theme') === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
}

const userInput = document.querySelector('#input-username') 
const searchBtn = document.querySelector('#search')

const avater = document.querySelector('#avater')

const personName = document.querySelector('#name')
const userName = document.querySelector('#username')

const joinDate = document.querySelector('#join-date')
const bio = document.querySelector('#bio')

const repos = document.querySelector('#repos')
const followers = document.querySelector('#followers')
const following = document.querySelector('#following')

const userLocation = document.querySelector('#location');
const link = document.querySelector('#link')

const twitter = document.querySelector('#twitter')
let twittLink  = twitter.getAttribute('href')

const company = document.querySelector('#company')

function dateConverter(dates){
    userDate = dates.split('T')
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(userDate[0]);
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    console.log(`${day} ${month} ${year}`)
    
    return `${day} ${month} ${year}`;
} 

const baseUrl = 'https://api.github.com/users/'

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector("#loader");
    const content = document.querySelector("#content");

    async function fetchUserGit(username) {
        try {
            loader.classList.remove("deactive");
            content.classList.remove("active");

            const userResponse = await fetch(`${baseUrl}${username}`);
            if (!userResponse.ok) {
                alert("User not found (404)");
                throw new Error("User not found (404)");
            }

            const userData = await userResponse.json();
            avater.setAttribute("src", userData.avatar_url);

            personName.textContent = userData.login;
            userName.textContent = `@${username}`;
            userName.setAttribute("href", userData.html_url);

            joinDate.textContent = `Joined ${dateConverter(userData.created_at)}`;
            bio.textContent = userData.bio == null ? "This Profile has no bio." : userData.bio;

            repos.textContent = userData.public_repos;
            followers.textContent = userData.followers;
            following.textContent = userData.following;

            userLocation.textContent = userData.location == null ? "Not available" : userData.location;
            if (userData.blog != null) {
                link.setAttribute("href", userData.blog);
                link.textContent = "Blog website";
            } else {
                link.textContent = "Not available";
                link.setAttribute("href", "index.html");
            }
            twitter.textContent = userData.twitter_username == null ? "Not available" : userData.twitter_username;
            company.textContent = userData.company == null ? "Not available" : userData.company;

            loader.classList.add("deactive");
            content.classList.add("active");
        } catch (err) {
            console.error("Error fetching GitHub data:", err.message);
        }
    }

    fetchUserGit("octocat");

    searchBtn.addEventListener("click", () => {
        const searchFor = userInput.value;
        fetchUserGit(searchFor);
    });

    userInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") { 
            fetchUserGit(userInput.value);
        }
    });
});
