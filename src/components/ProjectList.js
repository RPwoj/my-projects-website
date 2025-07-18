import { useEffect } from "react";

function ProjectList() {

    useEffect(
        function techsHoldersSameHeight() {
            const techsHolders = document.querySelectorAll('.techs-holder');
            let maxHeight = 0;

            techsHolders.forEach(techsHolder => {
                // console.log(techsHolder.getBoundingClientRect());
                maxHeight = (techsHolder.getBoundingClientRect().height > maxHeight) ? techsHolder.getBoundingClientRect().height : maxHeight;
            })

            techsHolders.forEach(techsHolder => {
                techsHolder.style.minHeight = `${maxHeight}px`;
            })


        },[])

    function ProjectListEl(props) {

        const repositories = Object.keys(props.projectGithubUrls).map((el) => {
            return (
                <a href={props.projectGithubUrls[el]} className="btn btn-github" target="_blank">{(el == 'repository') ? 'See repository' : 'See ' + el.split('-')[1] + ' repository'}</a>
            )
        })

        return (
            <div className="projects-list-el">
                <div className="projects-list-el-inner">
                    <div className="project-name-holder">
                        <p className="project-name">{props.projectName}</p>
                    </div>
                    <div className="techs-holder">
                    {props.projectTechStack.map((el) => {
                        return (
                            <span className="label" label-data={el}>{el}</span>
                        )
                    })}
                    </div>
                    <div className="buttons-holder">
                        <a href={props.projectUrl} className="btn btn-website" target="_blank">See project</a>
                        {repositories}
                    </div>
                </div>
            </div>
        );
    }


    return (
    <div className="projects-list">
        <ProjectListEl projectName="Hotels app project frontend" projectUrl="https://hotels.ytq.pl" projectGithubUrls={{"repository-frontend":"https://github.com/RPwoj/hotels-app-front", "repository-backend":"https://github.com/RPwoj/hotels-api"}} projectTechStack={['React','Bootstrap']} />
        <ProjectListEl projectName="PNG minifier" projectUrl="https://minifier.ytq.pl/" projectGithubUrls={{"repository":"https://github.com/RPwoj/image-minifier"}} projectTechStack={['PHP','OOP']} />
        <ProjectListEl projectName="Group ToDo" projectUrl="https://todo.ytq.pl/" projectGithubUrls={{"repository":"https://github.com/RPwoj/wp-todo"}} projectTechStack={['Wordpress', 'PHP', 'JS']} />
    </div>
    )
}

export default ProjectList;