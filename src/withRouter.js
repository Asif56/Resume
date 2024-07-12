import { useLocation, useNavigate, useParams } from "react-router-dom"

export const withRouter=(Component)=>props=>{
     function ComponentWithRouter(){
       const location= useLocation()
       const params=useParams()
       const navigate=useNavigate()

       return (
        <Component
          {...props}
          router={{location,params,navigate}}
        />
       )
     }
     return ComponentWithRouter
}