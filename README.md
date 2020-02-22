# tripApp
 Angular project

Project description and functionalites
The application simmulates a social network for sharing information about trips and adventures. A user is able to register and view the availabe information about all adventures. Also a user is able to create his own trip events. The app's functionality allows the user to edit or remove only his own trips.

For the backend of the application is used Firebase.

The application features the following functionalites: 
• Signin and Signup with email and password
• Form and input fields validations notificated with Toastr
• The header has a two different views depending on if user is authenticated
• Aplication use all of the CRUD operations, implementet with HttpClient.
• Interseptor is used to intercept the application's http requests, check the token and add it to the url or catch and trow the error.
• View all created adventures on the list page - get request to firebase 
• Ability to create a trip/adventure via create form - post to the base
• When exploring the trips by click on them user can see the details page - get by id
• Details - if the user is creator of the trip he/she is able to edit the adventure via form/patch req/ or remove/delete req/ it completly from the frontend as well from the backend;
• A simple error handling of the REST API services, error messages with Toastr
• Protected routing i.e if a unauthorized user tries to access protected route he will be redirected to the signin page 
• Lazy loading
• HTML5 features like <video> and LocalStorage 


