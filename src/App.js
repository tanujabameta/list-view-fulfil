import React, { useState } from "react";
import "./App.css";
import useGetPhotos from "./hooks/useGetPhotos";
import DataTable from "./Components/DataTable/DataTable";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const { albumList, loading, hasMoreAlbum } = useGetPhotos(pageNumber);

  const scrollToEnd = () => hasMoreAlbum && setPageNumber(pageNumber + 1);

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
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
      <DataTable albumList={albumList} columns={columns} />
      {loading && hasMoreAlbum && (
        <div className="loader">
          <span></span>
          <span></span>
        </div>
      )}
    </div>
  );
}

export default App;
