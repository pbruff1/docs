
export const FlowCard = ({ title, type, step, children }) => {
  return (
    <div className="flowCard" style={{ marginBottom: "2%" }}>

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
    <div style={{ display: "flex", marginBottom: "1%" }}>
      <span style={{ width: "15%", padding: "1%" }}>
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





