

export const FlowCard = ({ title, type, step, children }) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <span
          className={`${type}-logo logo`}
          style={{
            boxSizing: "border-box",
            flex: "0 0 10%",
            border: "1px solid #ddd",
            padding: "1%",
          }}
        >
          Step {step}
        </span>

        <span
          className={`${type}-text text`}
          style={{
            boxSizing: "border-box",
            flex: 1,
            minWidth: 0,
            border: "1px solid #ddd",
            borderLeft: 0,
            padding: "1%",
          }}
        >
          {title}
        </span>
      </div>

      <span
        className="flowContent"
        style={{
          display: "block",
          boxSizing: "border-box",
          width: "100%",
          border: "1px solid #ddd",
          borderTop: 0,
          padding: "1%",
        }}
      >
        {children}
      </span>
    </div>
  );
};


