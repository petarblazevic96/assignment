# assignmentAPI

## Setup instructions
 - run ```npm install```
 - change config.js to your needs
    * port: port on which application will start
    * historyFile: path to history file(e.g ```C:/projects/assignmentAPI/history.json```)
 - start application with ```npm run start```

## Technical overview
 - API was built using Node.js and Express framework
 - This api has two functionalities to provide related topics from duckduckgo api for specific query and to track history for each search
 - Folder structure
   * controllers
      * In historyController.js we defined actions for saving history to history file and getting history from history file
      * In resultController.js we defined action for getting result from duckduckgo API
   * routes
      * In apiRoutes.js we defined all the routes we have on /api route and for each route we defined its corresponding action from controllers
 - In index.js we defined basic setup of our api
    * we setup cors
    * added body parser for json since we send json object into body when we want to save specific query
    * added root route /api and passed router for that route
 - In apiRoutes.js we defined all routes on /api and for each route we passed its action which are defined in their corresponding controller


# assignmentWeb

## Setup instructions
 - run ```npm install```
 - change config.js to your needs
    * path to config.js is /src/config.js
 - start application with ```npm run start```   

## Technical overview
 - Application was built using React and Redux for state management
 - Folder structure
   - App
      * actions
         * In appActions.js we defined functions for getting or posting data to API
         * fetchSearchHistory is used to get history data from API and dispatch action 'INIT'
         * searchQuery is used to get related topics from API, post that result back to API so we save that to search to history and dispatch action 'SEARCH'
         * clear is used to dispatch 'CLEAR' action
      * components
         * Here we have components which are used through out the application
         * Rach component has its own folder in which we have *.js file for component and if needed *.css specific for that component
         * Topic component is used to render each related topic for query we searched
         * SearchHistory component is used to render our search history
      * containers
         * Same content as component folder
         * AppContainer.js is main container for our application where we used components to build our application
         * In appContainer we prepared all props which we pass down to the components
         * We bind all functions to this in constructor so we can use this in functions to access state and props 
      * models
      * reducers
         * Here we put all our reducers for application
         * We combine all reducers in index.js so we can create store with multiple reducers if needed
         * TopicReducer.js is main reducer we use for our application 
         * State contains history[] and result
         * History[] is array which we populate initialy on action 'INIT'
         * Result is property which we set up on action 'SEARCH'
         * We clear result on action 'CLEAR'
