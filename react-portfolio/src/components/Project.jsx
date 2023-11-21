
export default function Project({ project }) {
    const projectStyle = {

    }

    const imgStyle = {
        height: '50%',
        width: '50%'
    }

    return (
        <div className="project"> 
            <div className="project-img">
                <img src={project.img} alt="project img" style={imgStyle}/>
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