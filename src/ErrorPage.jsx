import { useRouteError } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Navbar />
      <div id="error-page" className="text-center m-10">
        <h1 className="text-3xl text-blue-700">Oops!</h1>
        <p className="text-3xl text-red underline">
          Sorry, an unexpected error has occurred.
        </p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
}
