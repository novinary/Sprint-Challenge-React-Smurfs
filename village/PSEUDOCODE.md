** MVP - Stage 1 **
Construct your Components to build a Single Page Application. Keep your components separate and design them as if they are pages before adding in your Router.
Step 1
 Construct an AXIOS request to retrieve an array all the Smurfs in the Smurf DB simply write a GET to the endpoint /smurfs.
 - import axios library in App.js- Done
 - use GET request functionality to display smurf list - Done

Step 2
 Construct an AXIOS request to POST to add a Smurf to the Smurf DB you'll need all three fields.
 - import axios library in SmurfForm.js - Done
 - inside of the addSmurf arrow function, add post functionality to add a Smurf to the Smurf DB - Done
 - Wrap the axios bits of code inside of a new function called addSmurf and call this new function inside of componentDidMount in App.js - Done
 - Update to this new props in the render function - Done

Step 3
 If a Smurf is created correctly, you should see a response that is an array of Smurfs with unique id's assigned to each Smurf. - Done

** MVP - Stage 2 **
Add a Router to this application by using React Router.
Step 4
- Import BrowserRouter inside index.js - Done
Wrap <App /> component to ReactDOM.render() with new Router component. - DOne
- Import { Route } from 'react-router-dom' inside of App.js - Done

 Step 5
 Then make it so you can navigate to your routes using Link.
 - create a new NavBar Component under components folder - Done
- create two routes in your App component, one at '/' for your Smurfs component,and one at /smurf-form for your form. - Done
 - then in your App component, create a nav bar that will use NavLink to route to your different pages. - Done
 - import NavBar component in App component- Done
 - add the NavBar route in the render function in App component - Done
