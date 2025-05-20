import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/projectService";

 export default function useOwnerProjects(){
    return useQuery({
        queryKey:["owner-projects"],
        queryFn:getOwnerProjectsApi
    })
 
 }