import Project from "../components/Project";
import { projects } from "../assets/projectData"


const PortfolioPage = () => {
    return (
        <div className="project-container">
            <h1 className="">Previous Projects</h1>
            {projects.map((project) => (
                <Project key={project.title} project={project} />
            ))}
        </div>
    );
}

export default PortfolioPage