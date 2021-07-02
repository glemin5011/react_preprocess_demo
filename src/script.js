/*const element = <h1 className="greeting">Hello world!</h1>

ReactDOM.render(
  element,
  document.getElementById('root')
);
*/
//Custom components
/*
const Temperature = (props) => {
  return <h1>The current temperature is {props.degree}</h1>
};
// This is a function component
// can only accept one param (or "props")
// needs to return React element

//write JSX like standard DOM components
//use the name of custom component as the name of the React component

const element = <Temperature degree={25}/>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
*/

//all attributes are in the props object
//can access by props.degree

//Function that does not modify inputs is a pure function

/* eg.

const sum = (a, b) => {
  return a + b;
};

React expects all components to behave like this 

Below is an impure function that would not be allowed as a React component:

const add = (total, value) => {
  total += value;
};
*/

/* COMPOSING COMPONENTS */

//Custom components can be used in other custom components
//A whole page can be made from that

//E.g. app that uses Temp component to show temp in different cities

/*
const Temperature = (props) => {
  return <p>The current temperature in {props.city} is {props.degree} degrees {props.unit}</p>
};
*/

//Below is app component that is used to house htree Temp components\
//Passing different property values for each instances means diff temp for each diff city
//Div element must wrap Temp components, because React forbids to return multiple components in parallel
/*
const App = () => {
  return (
    <div>
      <Temperature city="London" degree={20} unit="celsius"/>
      <Temperature city="New York" degree={25} unit="celsius"/>
      <Temperature city="Dubai" degree={32} unit="celsius"/>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/
//If u use React components to develop an entire website, the App component will be at the very top representing the whole application

//Others integrate React into existing applications use it sparingly

//For example, they write smaller components such as the Temp component, or a button, or a social media widget and inject them at specific places only, writing the rest of the website with regular HTML

//Decision on how to use React is yours - but use more complex React components that contain smaller and simpler components.

//MAKE IT MODULAR

/* BUILDING A PAGE TEMPLATE */


//Page template is a page structure that can be reused across multiple pages

//We will use Bootstrap CSS to help styling the website

//Navbar
/*
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
    </nav>
  );
}

const Sidebar = () => {
  return (
    <div className="d-none d-md-block col-md-3">
      <div className="border border-primary py-4 px-3">
        Sidebar
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <div className="border-top p-2">
      Template Demo (c) 2019
    </div>
  );
}
*/
//Template component consisting of all of the components below
/*
const Template = (props) => {
  return (
    <div>
      <Navbar />
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-md-9">
            {props.children}
          </div>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  )
}
*/
//{props.children} is a React component that lets us access the children content of a component

//This implies that the Template component does not need to know in advance what the main content will be 


//Using the tempalte component is like other custom React comps 

//But we can add children content to Template since it will render it in the output




//In React the return output MUST be wrapped by a parent element / another component

//This means we will be adding extra nodes to the DOM

//to alleviate this, React introduced a helper component called Fragment - we can use the Fragment component to wrap a list of elements / components and the Fragment component will not transform into a DOM node when the content is injected into the DOM.

/*
const Template = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-md-9">
            {props.children}
          </div>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}
*/



const App = () => {
  return (
    <Template>
      <h1>Main content</h1>
    </Template>
  );
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);