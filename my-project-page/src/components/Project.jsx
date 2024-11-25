import React from 'react'
import "../css/Project.css"

function Project({ project }) {
  return (
    <div className='project-container'>
        <img src= {project.projectImageUrl} alt='Some pictures for project preview'/>
        <h2>{project.projectName}</h2>
        <a href= {project.projectLink} target='_blank'>Show Project</a>
    </div>
  )
}

export default Project