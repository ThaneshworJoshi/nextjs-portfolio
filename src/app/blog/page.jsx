import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href="/blog/testId" className={styles.blogContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.unsplash.com/photo-1674574124345-02c525664b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint explicabo magnam aperiam totam provident itaque quod fuga ipsam incidunt ipsum! Illo animi amet corrupti porro magni? Architecto laborum fugiat quasi quod consequuntur, odit sint sapiente eligendi corrupti modi nobis dolor!</p>
        </div>
      </Link>

      <Link href="/blog/testId" className={styles.blogContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.unsplash.com/photo-1687463221023-02f259da7d77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Islld ipsum dolor sit amet sdfsf.</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing sit amet consectetur, adipisicing sit amet consectetur, adipisicing sit amet consectetur, adipisicing sit amet consectetur, adipisicing elit. Sint explicabo magnam aperiam totam provident itaque quod fuga ipsam incidunt ipsum! Illo animi amet corrupti porro magni? Architecto laborum fugiat quasi quod consequuntur, odit sint sapiente eligendi corrupti modi nobis dolor!</p>
        </div>
      </Link>

      <Link href="/blog/testId" className={styles.blogContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.unsplash.com/photo-1687368438644-3ba4c870a26c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint explicabo magnam aperiam totam provident itaque quod fuga ipsam incidunt ipsum! Illo animi amet corrupti porro magni? Architecto laborum fugiat quasi quod consequuntur, odit sint sapiente eligendi corrupti modi nobis dolor!</p>
        </div>
      </Link>

      <Link href="/blog/testId" className={styles.blogContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="https://plus.unsplash.com/premium_photo-1686904396346-fc96d53fe368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint explicabo magnam aperiam totam provident itaque quod fuga ipsam incidunt ipsum! Illo animi amet corrupti porro magni? Architecto laborum fugiat quasi quod consequuntur, odit sint sapiente eligendi corrupti modi nobis dolor!</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
