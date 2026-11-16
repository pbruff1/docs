
export const FlowCard = ({ title, type, step, children }) => {
  return (
    <div className="flow-card">

      <div className="flow-card-header">
        <div className={`flow-card-step ${type}-logo`}>
          Step {step}
        </div>

        <div className={`flow-card-title ${type}-text`}>
          {title}
        </div>
      </div>

      <div className="flow-card-content">
        {children}
      </div>

    </div>
  );
};

