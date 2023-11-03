import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import CustomButton from "../../components/button/CustomButton";

type Props = {};

const ErrorPage = (props: Props) => {
  const error: any = useRouteError();
  const navigate = useNavigate();
  // console.log(typeof error);

  return (
    <>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <CustomButton
          style={{ width: "150px", margin: "0 auto" }}
          btnText="Về trang chủ."
          theme="light"
          onClick={() => navigate("/")}
        />
      </div>
    </>
  );
};

export default ErrorPage;
