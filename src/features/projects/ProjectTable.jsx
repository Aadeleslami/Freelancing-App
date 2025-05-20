import useOwnerProjects from "./useOwnerProjects"

function ProjectTable() {
    const{isLoading,data}=useOwnerProjects()
    console.log(data);
    
  return (
    <div>ProjectTable</div>
  )
}

export default ProjectTable