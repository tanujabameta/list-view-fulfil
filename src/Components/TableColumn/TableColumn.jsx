import React from "react";
import "./TableColumn.css";

const TableColumn = ({ columns, onSelectionChange, changeAlign, selected }) => {
  return (
    <thead>
      <tr>
        <th>
          <input
            type="checkbox"
            name="allSelect"
            onChange={onSelectionChange}
            checked={selected.some(() => true)}
          />
        </th>
        {columns.map((column) => {
          return column.numeric ? (
            <th key={column.id}>
              {column.label}
              <button className="alignButton" onClick={changeAlign}>
                align
              </button>
            </th>
          ) : (
            <th key={column.id} style={{ width: column.width }}>
              {column.label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableColumn;
