import Project from "../components/Project";
import { projects } from "../assets/projectData"


const PortfolioPage = () => {
    const projectContainerStyle = {
        display: 'flex',
        flexFlow: 'row wrap'
    }

    return (
        <>
            <h1 className="">Previous Projects</h1>
            <div className="container" style={projectContainerStyle}>
                {projects.map((project) => (
                    <Project key={project.title} project={project} />
                ))}
            </div>
        </>
    );
}

export default PortfolioPage