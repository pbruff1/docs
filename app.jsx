
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



export const FlowPopover = ({ title, children }) => {
  return (
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
    <span
      className="bootstrap-scope"
      style={{ display: "inline-block" }}
    >
      <button
        type="button"
        data-bs-toggle="popover"
        data-bs-trigger="click"
        data-bs-title={title}
        data-bs-content={children}
        style={{
          border: "none",
          background: "none",
          color: "#64AECF",
          padding: 0,
          cursor: "pointer"
        }}
      >
        {title}
      </button>
    </span>
  );
};