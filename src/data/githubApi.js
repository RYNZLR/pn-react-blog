const url = "https://api.github.com/users/RYNZLR/repos";

function getPublicProjects(cb){
    fetch(url)
        .then(res => res.json())
        .then(json => {
            cb(json)
        });
}

export default{
    getPublicProjects
}