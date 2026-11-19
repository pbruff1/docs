
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




import * as React from 'react';
import '@mantine/core/styles.css';
import { MantineProvider, Card, Group, Title, Text, Button, Popover } from '@mantine/core';

export const FlowPopover = ({ title, children }) => (
  <Popover position="bottom" withArrow shadow="md">
    <Popover.Target>
      <Button variant="light">{title}</Button>
    </Popover.Target>
    <Popover.Dropdown>{children}</Popover.Dropdown>
  </Popover>
);