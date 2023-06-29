import { images } from "@/mock/mockImages";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

const getData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    notFound();
  }

  return res.json();
};

const BlogDetail = async ({ params }) => {
  const { id } = params;
  const data = await getData(id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data?.title}</h1>
          <p className={styles.desc}>
            {data?.title}
            {data?.title}
            {data?.title}
          </p>
          <div className={styles.author}>
            <Image
              src="https://plus.unsplash.com/premium_photo-1682464767558-448de834ed4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>JOHN</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={images[id % 8]}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.text}>
          {data?.body}
          {data?.body}
          {data?.body}
          <br />
          <br />
          {data?.body}
          {data?.body}
          {data?.body}
          {data?.body}

          <br />
          <br />
          {data?.body}
          {data?.body}
          {data?.body}
          {data?.body}
          {data?.body}
          {data?.body}
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
