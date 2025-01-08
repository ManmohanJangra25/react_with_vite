const Loader = (props) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-100">
      <div className={`spinner-border ${props.showLoader ? "show" : "hide"}`}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
