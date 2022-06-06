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
    {
      id: "title",
      label: "Title",
      numeric: false,
      // width: "100px",
    },
    { id: "Url", label: "Url", numeric: false },
  ];

  return (
    <div className="App">
      <header>Table Infinite Scroll</header>
      <DataTable data={data} columns={columns} />
      {loading && (
        <div className="loader">
          <span></span>
          <span></span>
        </div>
      )}
    </div>
  );
}

export default App;
