import ProjectList from '../components/display/ProjectList';
import GitList from '../components/display/GitHubProjectList';


export default  function Projects(){


    return(
        <main>
            <h1>Projects</h1>

            <h2>School projects</h2>
            <ProjectList/>

            <h2>Public GitHub projects</h2>
            <GitList/>
            
           
        </main>
    )


}