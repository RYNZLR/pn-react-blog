import ProjectList from '../components/display/ProjectList';
import GitList from '../components/display/GitHubProjectList';


export default  function Projects(){


    return(
        <main>
            <h1>Projecten</h1>

            <h2>Schoolprojecten</h2>
            <ProjectList/>

            <h2>Public GitHub projecten</h2>
            <GitList/>
            
           
        </main>
    )


}