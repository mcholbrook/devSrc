/*
PSEUDOCODE

FRONTEND FOR SEARCH FIELD

-Import react (including component)
-Declare a class component, establish state with results: [], queryString: ''
-Add formRef = React.createRef() for form validation
-Add standard handleSubmit(calling the handlSearch function passed via props) and handleChange functions (can copy and paste)
-Render the form (only one field for the search query) and set onSubmit to be this.handleSubmit


BACKEND FOR SEARCH FIELD

Routes - Will utilize the resources router at /search, check auth, and call resourcesCtrl.search

Controllers - Creating a MongoDB text indexes to estabslish that you want to search for specific terms within strings and passing it title, Resource.find({}) using the Mongo $text and $search functions to search for keywords inside the title string, and then return results in a .json object.


FRONTEND FOR TRENDING RESOURCES

-Before a user makes a search, render a certain number (6?) of randomly chosen resources for the "Trending Resources" section. When componentDidMount is true && results === [], perform a db fetch through resourcesAPI.getRandom 
-resourcesAPI.getRandom will fetch via the BASE_URL/search/random path and return those results to the search page

BACKEND FOR TRENDING RESOURCES

Routes - Utilizes the resources router at /search/random, will check auth, and will call resourcesCtrl.randomSearch (need to differentiate because we will also need random results for the home page)

Controllers - will use .aggregate method to find random resources and pass them back in a .json object.


NOTES: must import resourcesAPI on App.js and pass handleSearch function to the /search Route, must also import this file on App.js


*/