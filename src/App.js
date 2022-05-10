import { useState } from "react";
import Error from "./Error";
import Switch, { Case } from "./Switch";
import If from "./Conditions";
function App() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="container">
      <header className="display-1">React Ladies Pro Edition | 2022</header>
      <Error fallback={<span>Children Failed!</span>}>
        <If condition={count > 0}>
          <small className="display-3 text-muted">
            Starter Project {count}
          </small>
        </If>
      </Error>
      <button onClick={add}>add</button>
      <Error>
        <Switch value={count}>
          <Case match={1}>display for #1</Case>
          <Case match={2}>display for #2</Case>
          <Case match={3}>display for #3</Case>
        </Switch>
      </Error>
    </div>
  );
}

export default App;

// react with sugar synyex create tree, dont know the browser!
// create dynamic tree of objects.
// react dom read the tree and build real tree
// declarate programming
// react 18 - import ReactDom from react-dom/client
/**
 * react dom get
 * const app = {
 * type: 'div',
 * children: [
 *  {
 *    ...???
 *  }
 * ]
 * }
 */

/**
 * what is component?
 * function that returns element
 */

/**
 * jquery choose
 */

/**
 * render ?
 * the function runs again and return new element of react.
 * the dom not always updated!
 * rendering tab of chrome - paintFlashing tab
 */

/**
 * devtools react
 */

/**
 *  <React.StrictMode> - makes 2 rereders
 * render the function twice
 *
 * rerender - useState only make it.
 * const setState = useState()[1]
 *
 * pure function
 *
 * if you change something outside the function, it should alert it -
 * let name = 'nir' up the function
 *
 */

/**
 * conditional rendering:
 * const  [flag, setFlag] = useState(false)
 *
 * {flaf && (
 *  <h1></h1>
 * )}
 */

/**
 * const renderByFlag = () => {
 *  if(flag) {
 *    return <small className="">jdjdjd</small>
 *  }
 *
 * in the return:
 * {renderByFlag()} // bad practice, the function not always running,
 *                  //  and can't do optimization
 * }
 */

/**
 * Good practice:
 * import {Children} from 'react';
 * function If({condition, children}) {
*   // Children.map(children, (child) => ());
    // children is not always array!
    return condition && Children.only(children);
 * }
 *
 * in the parent componen:
 * <If condition={flag}>
 *  <small></small>
 * </If>
 * 
 * 
 * errorBondery - if one function crash in the tree,  try catch, if function fails, not all the tree fails!
 */

/**
 * concurrent mode - react 18 -
 * how to divide the code not to do blocking.
 * async action.
 * when to do diffing, properties.
 *
 * lazy loading - to load code in runtime. code spliting to bundle and load it by demand.
 * dynamic import buildin in react.
 *
 *
 */
