
import Label from './Label.js';
import ButtonLink from './ButtonLink.js';

function ProjectListEl(props) {

    const repositories = Object.keys(props.projectRepositoryUrls).map((el) => {
        return (
            <ButtonLink url={props.projectRepositoryUrls[el]} linkType='repository' text={(el == 'repository') ? 'Check' : 'Check ' + el.split('-')[1]} />
        )
    })

    return (
        <div className="projects-list-el">
            <div className="projects-list-el-inner">
                <div className="project-name-holder">
                    <p className="project-name">{props.projectName}</p>
                </div>
                <div className="techs-holder">
                {props.projectTechStack.map((tech) => {
                    return (
                        <Label text={tech} />
                    )
                })}
                </div>
                <div className="repositories-urls-holder">
                    <p className="urls-holder-name">Repository</p>
                    <div className="buttons-holder">
                        {repositories}
                    </div>
                </div>
                <div className="project-urls-holder">
                    <p className="urls-holder-name">Project</p>
                    <div className="buttons-holder">
                        <ButtonLink url={props.projectUrl} linkType='project' text="See project" />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProjectListEl;