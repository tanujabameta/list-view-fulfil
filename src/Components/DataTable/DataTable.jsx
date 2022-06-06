import React, { useState } from "react";
import "./DataTable.css";
import TableRow from "../TableRow/TableRow";
import TableColumn from "../TableColumn/TableColumn";

const DataTable = ({ data, columns }) => {
  const [toggleAlign, setToggleAlign] = useState(false);
  const [selected, setSelected] = useState([]);

  const onSelectionChange = (e) => {
    const { name, checked } = e.target;

    if (name === "allSelect") {
      console.log(name);
      setSelected((prev) => [...prev, name]);
    }
    setSelected((prev) =>
      checked ? [...prev, name] : prev.filter((val) => val !== name)
    );
    console.log(selected);
  };

  const changeAlign = () => {
    setToggleAlign(!toggleAlign);
  };

  return (
    <table>
      <TableColumn
        columns={columns}
        onSelectionChange={onSelectionChange}
        changeAlign={changeAlign}
        selected={selected}
      />
      <tbody>
        {data.map((item) => {
          return (
            <TableRow
              key={item.id}
              item={item}
              toggleAlign={toggleAlign}
              selected={selected}
              onSelectionChange={onSelectionChange}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
