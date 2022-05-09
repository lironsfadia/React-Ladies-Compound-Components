import { Children } from "react";

function If({ condition, children }) {
  return condition && Children.only(children);
}

export default If;
