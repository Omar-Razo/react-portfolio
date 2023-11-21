
export default function Project({ project }) {
    const projectStyle = {

    }

    return (
        <div className="project"> 
            <div className="project-img">
                <img src={project.img} alt="project img" width="35%"/>
            </div>
            <div className="card-body">
                <h3>{project.title}</h3>
                <div className="card-body-links">
                    <a href={project.app} >Deployed App</a>
                    <a href={project.github} >GitHub Repo</a>
                </div>
            </div>
        </div>
    )
}