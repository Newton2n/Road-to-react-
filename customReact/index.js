function customRender(reactElement, container) {
    //  const element = document.createElement(reactElement.type);
    //  element.innerHTML= reactElement.children;
    //  element.setAttribute("href",reactElement.props.href);
    //  element.setAttribute("target",reactElement.props.target);
    //   container.appendChild(element);

  const element2 = document.createElement(reactElement.type);
  element2.innerHTML = reactElement.children;
  for (const key in reactElement.props) {
    if (key === "children") continue ;
    element2.setAttribute(key,reactElement.props[key]);
    console.log(key)
  };
  container.appendChild(element2);
  
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
    id:"tk"
    
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
// function customRender(reactElement, container){
//     /*
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)

//     container.appendChild(domElement)
//     */

//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     for (const prop in reactElement.props) {
//         if (prop === 'children') continue;
//         domElement.setAttribute(prop, reactElement.props[prop])
//     }
//     container.appendChild(domElement)
// }

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// const mainContainer = document.querySelector('#root')

// customRender(reactElement, mainContainer)