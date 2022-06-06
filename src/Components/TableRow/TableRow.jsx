import React from "react";
import "./TableRow.css";

const TableRow = ({ item, toggleAlign, selected, onSelectionChange }) => {
  return (
    <tr key={item.id}>
      <td>
        <input
          type="checkbox"
          name={item.id}
          onChange={onSelectionChange}
          checked={selected.some((value) => value == item.id)}
        />
      </td>
      <td className={toggleAlign ? "alignRight" : null}>{item.id}</td>
      <td>{item.title}</td>
      <td>
        <a target="_self" href={item.url}>
          <img className="url" src={item.thumbnailUrl} alt="thumbnailimage" />
        </a>
      </td>
    </tr>
  );
};

export default TableRow;
