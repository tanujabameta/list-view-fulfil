import { useState, useEffect } from "react";
import axios from "axios";

const useGetPhotos = (page) => {
  const [albumList, setAlbumList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMoreAlbum, setHasMoreAlbum] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const result = await axios(
          `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=12`
        );
        setAlbumList((prevData) => {
          return [...prevData, ...result.data];
        });
        setLoading(false);
        setHasMoreAlbum(result.data.length > 0);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [page]);

  return { albumList, loading, hasMoreAlbum };
};

export default useGetPhotos;
