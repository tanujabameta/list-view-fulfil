import React, { useEffect, useState } from "react";
import "./TableRow.css";

const TableRow = ({
  item,
  toggleAlign,
  allSelected,
  uncheckedRow,
  clearSelection,
}) => {
  const [rowSelected, setRowSelected] = useState(false);
  const onSelectionChange = (e) => {
    if (e.target.checked) {
      setRowSelected(true);
    } else {
      setRowSelected(false);
      uncheckedRow(e.target.name);
    }
  };

  useEffect(() => {
    setRowSelected(allSelected || rowSelected);
  }, [allSelected, rowSelected]);

  useEffect(() => {
    setRowSelected(clearSelection);
  }, [clearSelection]);

  return (
    <tr key={item.id}>
      <td>
        <input
          type="checkbox"
          name={item.id}
          onChange={onSelectionChange}
          checked={rowSelected}
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
