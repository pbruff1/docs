
export const FlowCard = ({ title, type, step, children }) => {
  return (
    <div className="flowCard" style="margin-bottom:11%!important">

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


