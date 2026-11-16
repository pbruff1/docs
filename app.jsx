export const FlowCard = ({ title, type, step, children }) => {
  return (
    <div className="row mx-0 mb-4 p-0">
      <div className={`col-1 text-white p-2 ${type}-logo`}>
        Step {step}
      </div>

      <div className={`col-11 p-2 ${type}-text`}>
        {title}
      </div>

      <div className="col-12 p-3 border">
        {children}
      </div>
    </div>
  );
};
