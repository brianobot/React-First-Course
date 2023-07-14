
// PascalCasing: Always use this when creating function based components in react 
function Message() {
    // this is not HTML below
    // it is JSX: Javascript XML
    const name = null;
    // inside the curly braces in JSX you can add any js expression
    // expression = any piece of code that returns a value
    if (name)
        return <h1>Hello {name}!</h1>;
    return <h1>Hello World!</h1>;
}

// this returns the Message Component as the default object of this module.
export default Message;