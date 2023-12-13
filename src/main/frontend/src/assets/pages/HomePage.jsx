import React, { useEffect, useState } from "react";
import { https } from "../../services/AxiosConfig";

export const HomePage = () => {
  const [data, setData] = useState("not server");
  useEffect(() => {
    https.get("/api/connect").then((res) => {
      setData(res.data);
    });
  }, []);
  return <div>demo: {data}</div>;
};
