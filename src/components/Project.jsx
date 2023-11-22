
export default function Project({ project }) {
    const projectStyle = {
        flex: '1 0 auto',
        width: '40%',
        border: '2px solid var(--main-accent-color-1)'
    }

    const cardLinksStyle = {
        display: 'flex',
        justifyContent: 'space-around'
    }

    const imgStyle = {
        width: '70%',
    }

    return (
        <div className="project m-3" style={projectStyle}> 
            <h3>{project.title}</h3>
            <div className="project-img">
                <img src={project.img} alt="project img" style={imgStyle}/>
            </div>
            <div className="card-body">
                <p>{project.description}</p>
                <div className="card-body-links m-3" style={cardLinksStyle}>
                    { project.app ? (<a href={project.app} target="_blank">Deployed App</a>) : (
                        <a href={project.github} target="_blank">See GitHub for installation</a>
                    )}
                    <a href={project.github} target="_blank">GitHub Repo</a>
                </div>
            </div>
        </div>
    )
}