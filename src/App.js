import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import DataTable from "./Components/DataTable/DataTable";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios(
        "https://jsonplaceholder.typicode.com/photos/"
      );
      setData(result.data);
    })();
  }, []);

  const columns = [
    { id: "albumId", label: "Album ID", numeric: true },
    { id: "title", label: "Title", numeric: false },
    { id: "Url", label: "Url", numeric: false },
    { id: "thumbnailUrl", label: "ThumbNail Url", numeric: false },
  ];

  return (
    <div className="App">
      <header>List View</header>
      <DataTable data={data} columns={columns} />
    </div>
  );
}

export default App;
