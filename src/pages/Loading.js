import Loader from "../components/Loader";

/**
 * @returns Página de carga.
 */
const Loading = () => {
  return (
    <main>
      <div className="container loading__container">
        <Loader />
      </div>
    </main>
  );
};

export default Loading;
