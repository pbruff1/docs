
export const FlowCard = ({ title, type, step, children }) => {
  return (
    <div className="flowCard">

      <div style={{ display: "flex" }}>
        <span className={`${type}-logo logo`}>
          Step {step}
        </span>

        <span className={`${type}-text text`}>
          {title}
        </span>
      </div>

      <div className="flowContent">
        {children}
      </div>

    </div>
  );
};



export const FlowInput = ({ title, children }) => {
  return (
    <div style={{ display: "flex"}}>
      <span style={{ width: "15%", padding: "1% 0%"}}>
        {title}
      </span>

      <span style={{
        width: "85%",
        border: "1px solid #ddd",
        padding: "1%"
      }}>
        {children}
      </span>
    </div>
  );
};


export const Field = ({ children }) => {
  return (
    <code
      style={{
        border: "1px solid lightgrey",
        padding: "2px 5px",
        borderRadius: "4px",
        fontSize: "0.85em"
      }}
    >
      {children}
    </code>
  );
};