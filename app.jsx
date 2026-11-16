
export const FlowCard = ({ title, type, step, children }) => {
  return (
        <div style="display:flex;">
          <span class="${type}-logo logo">Step ${step}</span>
          <span class="${type}-text text">${title}</span>
        </div>
        <span class="flowContent">${children}</span>
  );
};

