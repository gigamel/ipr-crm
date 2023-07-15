import React from "react";

export default function NotFound({ title = "Page not found" }) {
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <p>Sorry! But page by this url is not found...</p>
    </React.Fragment>
  );
}
