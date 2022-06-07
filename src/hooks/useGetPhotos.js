import { useState, useEffect } from "react";
import axios from "axios";

const useGetPhotos = (page) => {
  const [albumList, setAlbumList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=12`
      );
      setAlbumList((prevData) => {
        return [...prevData, ...result.data];
      });
      setLoading(false);
    })();
  }, [page]);

  return { albumList, loading };
};

export default useGetPhotos;
