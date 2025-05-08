import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

const ErrorPage = () => {
  return (
    <>
      <h3>
        {" "}
        <Trans
          i18nKey="notFoundMessage"
          components={{
            1: <Link to="/" />,
          }}
        />
      </h3>
    </>
  );
};

export default ErrorPage;
