import { useEffect } from "react";
import ProjectListEl from "./ProjectListEl.js";

function ProjectList() {

    useEffect(
        function techsHoldersSameHeight() {
            if (window.innerWidth < 1080) return;
            const techsHolders = document.querySelectorAll('.techs-holder');
            let maxHeight = 0;

            techsHolders.forEach(techsHolder => {
                maxHeight = (techsHolder.getBoundingClientRect().height > maxHeight) ? techsHolder.getBoundingClientRect().height : maxHeight;
            })

            techsHolders.forEach(techsHolder => {
                techsHolder.style.minHeight = `${maxHeight}px`;
            })
        },[])

    return (
        <div className="projects-list">
            <ProjectListEl projectName="Hotels app project" projectUrl="https://hotels.ytq.pl" projectRepositoryUrls={{"repository-frontend":"https://github.com/RPwoj/hotels-app-front", "repository-backend":"https://github.com/RPwoj/hotels-api"}} projectTechStack={['Symfony', 'Api Platform', 'React.js','Bootstrap']} />
            <ProjectListEl projectName="PNG minifier" projectUrl="https://minifier.ytq.pl/" projectRepositoryUrls={{"repository":"https://github.com/RPwoj/image-minifier"}} projectTechStack={['PHP','OOP']} />
            <ProjectListEl projectName="Group ToDo" projectUrl="https://todo.ytq.pl/" projectRepositoryUrls={{"repository":"https://github.com/RPwoj/wp-todo"}} projectTechStack={['Wordpress', 'PHP', 'JS']} />
            <ProjectListEl projectName="My projects (this website :))" projectUrl="https://ytq.pl/" projectRepositoryUrls={{"repository":"https://github.com/RPwoj/my-projects-website"}} projectTechStack={['React.js']} />
        </div>
    )
}

export default ProjectList;