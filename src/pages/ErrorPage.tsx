import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      <h3>
        {" "}
        Jejda, tato stránka neexistuje. Klikni <Link to="/">sem</Link>
      </h3>
    </>
  );
};

export default ErrorPage;
