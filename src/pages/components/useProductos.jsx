import { useEffect, useState } from "react";
import axios from "axios";

function useProductos(search) {
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true);
    setData([]);

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/items?search=${search}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, [search]);

  return { data, isLoading };
}

export default useProductos;
