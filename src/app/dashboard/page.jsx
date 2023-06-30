"use client";

import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Dashboard = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  console.log(data, isLoading, error);
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(async () => {
  //   setIsLoading(true);

  //   const getData = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json();

  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   await getData();
  // }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
