import { images } from "@/mock/mockImages";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?page=1");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Blog() {
  const data = await getData();

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Link
          href={`/blog/${item?.id}`}
          className={styles.blogContainer}
          key={item.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={images[item?.id % 8]}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item?.title}</h1>
            <p className={styles.desc}>
              {item.body}
              {item.body}
              {item.body}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
