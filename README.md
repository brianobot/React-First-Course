# React-First-Course
First Course Learning the Fundamental of React with Code with Mosh

### Introduction (Revision) of the Working Principal of Web Pages
Web pages are generally wriiten in HTML, when the web page is loaded in a browser,the browser takes this html code
and produces a tree like structure called the DOM (Document Object Model), this can then be manipulated by javascript
in response to the user actions.

For example, we can use javascript to hide a button when it is clicked, 
this is vanilla javascript (plain  javascript code without any 3rd party code)

### React Intro
In React, the webpage is built using components, the components are the basic building block used by the user,
essentially, all reacts apps are made up of components in a tree structure with the App component being the root.

### Settng Up Development Environment
>>> npm create vite@latest

Follow and fill the prompt appropriately

>>> cd <project_name>

Project name must match name selected above

>>> npm i 

to Install project dependencies

>>> npm run dev

To Run the local development server


### Good to Know!
- node_modules: Contain library files needed by dependecies 
- public: Contain assets that would be exposed by your application (e.g Videos, Pictures etc)
- src : Contain the source code for your application


### Javscript Tips
- Object Deconstruction: This allows us to select certain attributes from within an object to be used an independent variables
    in other scopes of the program

    Example :
    
        const regularPerson {
            firstName: "Brian",
            lastName: "Obot"
        }

        let { firstname } = regularPerson 
        console.log(firstname) // Brian

        // Just for reference the name of the deconstructed variable doesn;t have to match
        // the attribute name, just the attribute position matters

        Further more functions that expect objects can be deconstructed at the arguments level to obtain
        just the attributes needed, 


- Object Literal Enhancement: This is the opposite of Object deconstruction, it allows variables to be grabbed from the 
    global scope and construction objects using these variables

    Example : 

        const name = "Tallac";
        const elevation = 9738;

        const funHike = { name, elevation };
        console.log(funHike); // {name: "Tallac", elevation: 9738}

