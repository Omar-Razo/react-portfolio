import Project from "../components/Project";
import { projects } from "../assets/projectData"


const PortfolioPage = () => {
    return (
        <div className="project-container">
            {projects.map((project) => (
                <Project key={project.title} project={project} />
            ))}
        </div>
    );
}

export default PortfolioPage