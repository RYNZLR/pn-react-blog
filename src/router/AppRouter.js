import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


  import AboutMe from '../views/AboutMe';
  import Blog from '../views/Blog';
  import Projects from '../views/Projects';


  export default  function AppRouter(){


    return(
        <Switch>
            <Route exact path="/blog">
                <Blog />
            </Route>
            <Route exact path="/projects">
                <Projects />
            </Route>
            <Route exact path="/">
                <AboutMe />
            </Route>
        </Switch>
    )


    }