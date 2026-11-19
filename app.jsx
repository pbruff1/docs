
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




import { useEffect } from "react";

export const FlowPopover = ({ title, children }) => {

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js";

    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Your component */}
    </div>
  );
};