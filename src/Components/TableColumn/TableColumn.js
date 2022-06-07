import React from "react";
import "./TableColumn.css";

const TableColumn = ({ columns, onAllSelectionChange, changeAlign, selected }) => {
  return (
    <thead>
      <tr>
        <th>
          <input
            type="checkbox"
            name="allSelect"
            onChange={onAllSelectionChange}
            checked={selected}
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
