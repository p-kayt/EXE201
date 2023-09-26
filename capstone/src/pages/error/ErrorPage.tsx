import React from "react";
import { useRouteError } from "react-router-dom";

type Props = {};

const ErrorPage = (props: Props) => {
  const error: any = useRouteError();
  console.log(typeof error);

  return (
    <>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
