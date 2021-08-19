import React from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { Gear } from "react-bootstrap-icons";
import Button from "./Button";

const GearButton = ({ columns }) => {
  const ColumnToggle = (props) => {
    return (
      <Popover {...props}>
        <Popover.Header>Show/Hide Columns</Popover.Header>
        <Popover.Body>
          {columns &&
            columns.map((column) => (
              <div key={column.id}>
                <label>
                  <input type="checkbox" {...column.getToggleHiddenProps()} />{" "}
                  {column.id[0].toUpperCase()}
                  {column.id.slice(1)}
                </label>
              </div>
            ))}
        </Popover.Body>
      </Popover>
    );
  };

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={ColumnToggle}>
      <button className="btn btn-primary">
        <Gear />
      </button>
    </OverlayTrigger>
  );
};

export default GearButton;
