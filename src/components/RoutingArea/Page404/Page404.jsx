import "./Page404.css";

const Page404 = () => {
  return (
    <div className=" flex-center-col Page404">
      <h2>Error 404</h2>
      <h2>Page Not Found</h2>
      <iframe
        className="shadow noHover"
        src="https://giphy.com/embed/VJHtXeMHViHRHvKGKm"
        width="480"
        height="360"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Page404;
