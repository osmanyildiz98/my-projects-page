import React from 'react'
import Project from './Project'
import "../css/ProjectList.css"

function ProjectList({projectsData}) {
  return (
      
      <div className="project-list-container">
        {
            projectsData.map((project,index) => {
               return  <Project key = {index} project = {project}/>
            })
        }
      </div>

  )
}

export default ProjectList
