const url = "https://api.github.com/users/";

// fetch element by ID
const get = (element) => document.getElementById(`${element}`);
// const l = (l) => document.querySelectorAll(`${l}`);


const input = get("input");
const btn = get("btn");

// update profile on enter key press
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getUserData(url + input.value);
    }
})

// update profile on btn pree
btn.addEventListener('click', () => {
let btn = get("btn")
    setTimeout(function(){
btn.style.padding= "8px 10px";

    },3000);
    if (input.value !== "") {
        getUserData(url + input.value);
    }
})



async function getUserData(giturl) {

    const response = await fetch(giturl);
    const data = await response.json();

    if (!data) {

        throw data;
    }
    updateProfile(data);

}

const noResult = get("noresults");

function updateProfile(data) {
    noResult.style.scale = 0;
    if (data.message !== "Not Found") {
        function checkNull(apiItem, domItem) {
            if (apiItem === "" || apiItem == null) {
                domItem.style.opacity = 0.4;
                domItem.previousElementSibling.style.opacity = 0.4;
                return false;
            }
            else {
                return true;
            }
        }

        const userImage = get("userImage")
        const name = get("name")
        const userName = get("username")
        const date = get("date")
        const ProfileBio = get("ProfileBio");

        const repos = get("repos")
        const following = get("following")
        const followers = get("followers")
        const location = get("location")
        const website = get("website")
        const twitter = get("twitter")
        const company = get("company")
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        // console.log(name)
        let datesegment;
        userImage.src = `${data.avatar_url}`;
        name.innerText = data?.name;
        userName.innerText = `@${data?.login}`
        userName.href = data?.html_url;
        datesegment = data?.created_at.split("T").shift().split("-");
        date.innerText = ` Joined ${datesegment[2]} ${month[datesegment[1] - 1]} ${datesegment[0]}`


        ProfileBio.innerText = (data?.bio === null) ? "This Profile has no Bio" : data?.bio;

        repos.innerText = data?.public_repos;
        repos.href = data?.repos_url;

        following.innerText = data?.following;
        following.href = data?.following_url;

        followers.innerText = data?.followers;
        followers.href = data?.followers_url;
        // checknull wali condition true return karegi to 1t wala chalega or fale return karegi to not available 

        location.innerText = checkNull(data?.location, location) ? data?.location : "Not Available";

        website.innerText = checkNull(data?.blog, website) ? data?.blog : "Not Available";
        website.href = checkNull(data?.blog, website) ? data?.blog : " #";

        twitter.innerText = checkNull(data?.twitter_username, twitter) ? data?.twitter_username : "Not Available";
        twitter.href = checkNull(data?.twitter_username, twitter) ? `https://twitter.com/${data?.twitter_username}` : "#";

        company.innerText = checkNull(data?.company, company) ? data?.company : "Not Available";
    }

    else {
        noResult.style.scale = 1;
        setTimeout(() => {
            noResult.style.scale = 0;
        }, 2500);
    }
}

let modebtn = get("modeBtn");
let modetext = get("modeText");
let modeicon1 = get("modeIcon1");
let modeicon2 = get("modeIcon2");


function darkMode() {
    const wrapper = get("wrapper");
    const title = get("title");
    const searchContainer = get("searchContainer")
    const profileContainer = get("profileContainer")
    const name = get("name")
    const date = get("date")
    const ProfileBio = get("ProfileBio");
    const repos = get("repos")
    const following = get("following")
    const followers = get("followers")
    const location = get("location")
    const website = get("website")
    const twitter = get("twitter")
    const company = get("company")
    const stats1 = get("statsTitle1")
    const stats2 = get("statsTitle2")
    const stats3 = get("statsTitle3")
    // alert(wrapper)
    wrapper.style.background = '#141D2F';
    statsContainer.style.background = '#141D2F';
    profileContainer.style.background = '#1E2A47'
    searchContainer.style.background = "#1E2A47"
    searchContainer.style.boxShadow = "5px 10px 9px .78px rgba(70,88,109,0.15)";
    profileContainer.style.boxShadow = "5px 10px 9px .78px rgba(70,88,109,0.15)";
    input.style.background = "#1E2A47"
    input.style.color = "white"
    title.style.color = "white";
    modetext.style.color = "white";
    name.style.color = "white";
    date.style.color = "white";
    ProfileBio.style.color = "white";
    repos.style.color = "white";
    following.style.color = "white";
    followers.style.color = "white";
    location.style.color = "white";
    website.style.color = "white";
    twitter.style.color = "white";
    company.style.color = "white";
    // classes.style.color = "white";
    stats1.style.color = "white";
    stats1.style.opacity = "1";
    stats2.style.color = "white";
    stats2.style.opacity = "1";
    stats3.style.color = "white";
    stats3.style.opacity = "1";


}
function lightMode() {
    const wrapper = get("wrapper");
    const title = get("title");
    const searchContainer = get("searchContainer")
    const profileContainer = get("profileContainer")
    const name = get("name")
    const date = get("date")
    const ProfileBio = get("ProfileBio");
    const repos = get("repos")
    const following = get("following")
    const followers = get("followers")
    const location = get("location")
    const website = get("website")
    const twitter = get("twitter")
    const company = get("company")
    const stats1 = get("statsTitle1")
    const stats2 = get("statsTitle2")
    const stats3 = get("statsTitle3")
    // alert(wrapper)
    wrapper.style.background = 'rgb(241, 245, 255)';
    statsContainer.style.background = 'rgb(241, 245, 255)';
    profileContainer.style.background = 'white'
    searchContainer.style.background = "white"
    input.style.background = "white"
    searchContainer.style.boxShadow = " 5px 10px 9px .78px #cbddee";
    profileContainer.style.boxShadow = " 5px 10px 9px .78px #cbddee";
    title.style.color = "#145DA0";
    input.style.color = "#145DA0"
    modetext.style.color = "#145DA0";
    name.style.color = "black";
    date.style.color = "black";
    ProfileBio.style.color = "black";
    repos.style.color = "black";
    following.style.color = "black";
    followers.style.color = "black";
    location.style.color = "black";
    website.style.color = "black";
    twitter.style.color = "black";
    company.style.color = "black";
    stats1.style.color = "black"
    stats2.style.color = "black";
    stats3.style.color = "black";



}

modebtn.addEventListener("click", () => {
    if (modetext.innerText === "Dark") {
        modetext.innerText = "light"
        modeicon1.style.display = "none"
        modeicon2.style.display = "block"
        darkMode();
    }
    else {
        modetext.innerText = "Dark"
        modeicon2.style.display = "none"
        modeicon1.style.display = "block"
        lightMode();
    }
})

getUserData(url + "priyansh70");
