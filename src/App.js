import React, { useState } from "react";
import "./App.css";
import useGetPhotos from "./hooks/useGetPhotos";
import DataTable from "./Components/DataTable/DataTable";

function App() {
  const [page, setPage] = useState(1);

  const { data, loading } = useGetPhotos(page);

  const scrollToEnd = () => {
    setPage(page + 1);
  };

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

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
      <div>{loading && "Loading..."}</div>
    </div>
  );
}

export default App;
