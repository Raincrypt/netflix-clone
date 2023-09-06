import { requests } from "../Requests";

const movieDescriptionLimit = 150;

const movieSections = [
    {
        title: "Up Comming",
        fetchURL: requests.requestUpcoming
    },
    {
        title: "Popular",
        fetchURL: requests.requestPopular
    },
    {
        title: "Trending",
        fetchURL: requests.requestTrending
    },
    {
        title: "Top Rated",
        fetchURL: requests.requestTopRated
    },
    {
        title: "Horrer",
        fetchURL: requests.requestHorror
    }
]

const signUpBgImage = 'https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_small.jpg'

export {
    movieDescriptionLimit,
    movieSections,
    signUpBgImage
}