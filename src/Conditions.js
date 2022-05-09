import { Children } from "react";

function If({ condition, children }) {
  return Children.only(children);
}

export default If;
