import Link from "next/link";
import { Trans } from "react-i18next";

const ErrorPage = () => {
  return (
    <>
      <h3>
        {" "}
        <Trans
          i18nKey="notFoundMessage"
          components={{
            1: <Link href="/" />,
          }}
        />
      </h3>
    </>
  );
};

export default ErrorPage;
