import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useGetPhotos = (page) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    setLoading(true);
    (async () => {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=12`
      );
      setData((prevData) => {
        return [...prevData, ...result.data];
      });
      setLoading(false);
    })();
  }, [page]);

  return { data, loading };
};

export default useGetPhotos;
