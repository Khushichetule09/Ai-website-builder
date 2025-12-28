import React, { useEffect, useState } from 'react'
import type { Project } from '../types'
import { useNavigate, useParams } from 'react-router-dom'
import { Loader2Icon, MessageSquare, XIcon } from 'lucide-react'
import { dummyConversations, dummyProjects } from '../assets/assets'

const Projects = () => {
  const {projectId} = useParams()
  const navigate = useNavigate()


  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  const [isGenerating, setIsGenerating] = useState(true)
  const [device, setDevice] = useState<'phone' | 'tablet' | 'desktop'>('desktop')

  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const fetchProject = async () => {
  const project = dummyProjects.find(project => project.id === projectId)
    setTimeout(() => {
    if (project) {
      setProject({ ...project, conversation: dummyConversations })
      setIsGenerating(project.current_code ? false : true)
    }
    setLoading(false)
  }, 2000)
}



  useEffect(() =>{
    fetchProject()
  }, [])

  if(loading){
    return (
      <>
      <div className='flex items-center justify-center h-screen'>
        <Loader2Icon className='size-7 animate-spin text-violet-200'/>

      </div>
      </>
    )
  }

  return project ? (
    <div className='flex flex-col h-screen w-full bg-gray-900 text-white'>
      {/* builder navbar */}
      <div className='flex max-sm:flex-col sm:items-center gap-4 px-4 py-2 no-scrollbar'>
        {/* left */}
        <div className='flex items-center gap-2 sm:min-w-90 text-nowrap'>
          <img src="/favicon.svg" alt="logo" className='h-6 cursor-pointer' onClick={()=> navigate('/')} />
          <div>
            <p className='text-sm text-medium capitalize truncate'>{project.name}</p>
            <p className='text-xs text-gray-400 -mt-0.5'>Previewing last saved version</p>
          </div>
          <div className='sm:hidden flex-1 flex justify-end'>
             {isMenuOpen ?
             <MessageSquare onClick={() => setMenuOpen(false)} className='size-6 cursor-pointer' />
             : <XIcon onClick={() => setMenuOpen(true)} className='size-6 cursor-pointer' />}
          </div>
        </div>
        {/*middle*/}
        <div></div>
        {/* right */}
      </div>
    </div>
  ) 
  :
  (
    <div className='flex items-center justify-center h-screen '> 
    <p className='text-2xl font-medium text-gray-200'>Unable to load project!</p>
  </div>
  )
}

export default Projects