const ResumePage = () => {
    const listStyle = {
        listStyleType: "none",
    }

    return (
        <div>
            <h1>Resume</h1>
            <div className="">
                <h2>Software/Programming Proficiencies</h2>
                <ul style={{...listStyle, columns: "2"}}>
                    <li>Version Control</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Node JS</li>
                    <li>Express JS</li>
                    <li>React</li>
                    <li>REST APIs</li>
                    <li>GraphQL</li>
                    <li>MySQL/Sequelize</li>
                    <li>MongDB/Mongoose</li>
                    <li>Python</li>
                </ul>
            </div>
            <div className="">
                <h2>Other Skills/Education</h2>
                <h3 className="display-6">Languages</h3>
                <ul style={{...listStyle, columns: "2"}}>
                    <li>Bilingual: English and Spanish</li>
                    <li>Basic German</li>
                </ul>
                <h3 className="display-6">Education</h3>
                <ul style={listStyle}>
                    <li>Studied Microbiology and Sociology at University of California, Davis</li>
                </ul>
            </div>
            <div>
                <button className="m-3">Download Resume</button>
            </div>
        </div>
    );
}

export default ResumePage