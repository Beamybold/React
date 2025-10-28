import './Style.css';

function Skills() {
    const skills = ["Python", "HTML", "CSS", "JavaScript", "React"];
    return(
    <div className="skills">
      <h2>My technical skills are:</h2>
      <ul>
        {skills.map((skill, index) => (
            <li key={index}>{skill}</li>

        ))}
      </ul>
    </div>
    );
};

export default Skills;
