import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="internal-page">
      <div className="internal-page__content">
        <h1 className="internal-page__title">Page not found.</h1>

        <p className="internal-page__description">
          The page you are looking for does not exist.
        </p>

        <Link to="/" className="navigation-action">
          Return home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;