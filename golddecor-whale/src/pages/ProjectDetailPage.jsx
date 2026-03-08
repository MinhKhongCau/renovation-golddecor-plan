import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProjectDetail from '../components/ProjectDetail'
import { projects } from '../data/projects'

function ProjectDetailPage() {
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const project = projects.find(p => p.id === parseInt(id))

  return <ProjectDetail project={project} />
}

export default ProjectDetailPage