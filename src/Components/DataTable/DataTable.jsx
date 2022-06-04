import React from "react";
import "./DataTable.css";

const DataTable = ({ data, columns }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          {columns.map((column) => {
            return <th key={column.id}>{column.label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <img className="url" src={item.url} alt="url" />
              </td>
              <td>
                <img
                  className="thumbnailUrl"
                  src={item.thumbnailUrl}
                  alt="thumbnail Url"
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
