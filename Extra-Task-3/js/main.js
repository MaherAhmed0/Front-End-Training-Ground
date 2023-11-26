document.addEventListener("DOMContentLoaded", function () {
    var getProjectsBtn = document.getElementById("getProjects");
    if (getProjectsBtn) {
        getProjectsBtn.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = "projects.html";
        });
    }
    if (window.location.pathname.includes("projects.html")) {
        loadRepositories();
    }
    function loadRepositories() {
        let request = new XMLHttpRequest();
        request.open("GET", "https://api.github.com/users/maherahmed0/repos");
        request.send();
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let reposData = JSON.parse(this.responseText);
                console.log(reposData);
                displayRepositories(reposData);
            }
        };
    }
    function displayRepositories(data) {
        data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        var projectsList = document.getElementById("projectsList");
        data.forEach((repo) => {
            let projectItem = document.createElement("div");
            projectItem.classList.add("project-item");

            let projectContent = document.createElement("div");
            projectContent.classList.add("project");

            let projectName = document.createElement("h3");
            projectName.textContent = repo.name;
            projectName.classList.add("repo-name");

            let projectTopics = document.createElement("div");
            projectTopics.classList.add("topics");

            repo.topics.forEach((topic) => {
                let topicItem = document.createElement("div");
                topicItem.textContent = topic;
                topicItem.classList.add("topic-item");
                projectTopics.appendChild(topicItem);
            });

            let line = document.createElement("hr");

            let projectDescription = document.createElement("p");
            projectDescription.textContent = repo.description;
            projectDescription.classList.add("description");

            let projectLinks = document.createElement("div");
            projectLinks.classList.add("links");

            let projectInGitHub = document.createElement("a");
            projectInGitHub.classList.add("link-item");
            projectInGitHub.href = repo.html_url;
            projectInGitHub.textContent = "View in GitHub";
            projectInGitHub.target = "_blank";
            projectLinks.appendChild(projectInGitHub)

            let projectPreview = document.createElement("a");
            projectPreview.classList.add("link-item");
            if (repo.homepage != null && repo.homepage != "") {
                projectPreview.href = repo.homepage;
                projectPreview.textContent = "Preview";
                projectPreview.target = "_blank";
                projectLinks.appendChild(projectPreview);
            }

            projectContent.appendChild(projectName);
            projectContent.appendChild(projectTopics);
            projectContent.appendChild(line);
            projectContent.appendChild(projectDescription);
            let line2 = document.createElement("hr");
            if (repo.description != null) {
                projectContent.appendChild(line2);
            }
            projectContent.appendChild(projectLinks);

            projectItem.appendChild(projectContent);
            projectsList.appendChild(projectItem);
        })
    }
})