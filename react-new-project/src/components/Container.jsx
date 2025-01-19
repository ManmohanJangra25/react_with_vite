const Container = (props) => {
  return (
    <div className="card" style={{ width: "70%" }}>
      <div className="card-body">{props.children}</div>
    </div>
  );
};

export default Container;
