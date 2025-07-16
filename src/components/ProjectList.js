import { useEffect } from "react";

function ProjectList(props) {

    useEffect(
        function techsHoldersSameHeight() {
            const techsHolders = document.querySelectorAll('.techs-holder');
            let maxHeight = 0;

            techsHolders.forEach(techsHolder => {
                console.log(techsHolder.getBoundingClientRect());
                maxHeight = (techsHolder.getBoundingClientRect().height > maxHeight) ? techsHolder.getBoundingClientRect().height : maxHeight;
            })

            techsHolders.forEach(techsHolder => {
                techsHolder.style.minHeight = `${maxHeight}px`;
            })


        },[])

    function ProjectListEl(props) {
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
                        <a href={props.projectUrl} className="btn btn-website">See project</a>
                        <a href={props.projectGithubUrl} className="btn btn-github">See project</a>
                    </div>
                </div>
            </div>
        );
    }


    return (
    <div className="projects-list">
        <ProjectListEl projectName="Hotels app project" projectUrl="" projectGithubUrl="" projectTechStack={['Symfony','React','Bootstrap']} />
        <ProjectListEl projectName="PNG minifier" projectUrl="" projectGithubUrl="" projectTechStack={['Debian','OOP']} />
        <ProjectListEl projectName="Group ToDo" projectUrl="" projectGithubUrl="" projectTechStack={['Wordpress', 'PHP', 'JS', 'Mailgun']} />
    </div>
    )
}

export default ProjectList;