import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const BlogDetail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            ullam quia eveniet, ex aperiam suscipit nobis iusto ab maiores
            quisquam eum voluptatibus quam earum illo. Hic facere animi in
            eligendi!
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
            src="https://plus.unsplash.com/premium_photo-1682464767558-448de834ed4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          molestias consectetur! Debitis, non aut ex, minima nisi ullam qui
          officiis magnam omnis unde quia! Eum rerum voluptates, aspernatur
          corporis, debitis at, labore atque unde fugit esse molestias alias quo
          nisi.ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          molestias consectetur! Debitis, non aut ex, minima nisi ullam qui
          officiis magnam omnis unde quia! Eum rerum voluptates, aspernatur
          corporis, debitis at, labore atque unde fugit esse molestias alias quo
          nisi.
          <br/>
          <br/>

          ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          molestias consectetur! Debitis, non aut ex, minima nisi ullam qui
          officiis magnam omnis unde quia! Eum rerum voluptates, aspernatur
          corporis, debitis at, labore atque unde fugit esse molestias alias quo
          nisi.ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          molestias consectetur! Debitis, non aut ex, minima nisi ullam qui
          officiis magnam omnis unde quia! Eum rerum voluptates, aspernatur
          corporis, debitis at, labore atque unde fugit esse molestias alias quo
          nisi.ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          molestias consectetur! Debitis, non aut ex, minima nisi ullam qui
          officiis magnam omnis unde quia! Eum rerum voluptates, aspernatur
          corporis, debitis at, labore atque unde fugit esse molestias alias quo
          nisi.
          ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          molestias consectetur! Debitis, non aut ex, minima nisi ullam qui
          officiis magnam omnis unde quia! Eum rerum voluptates, aspernatur
          corporis, debitis at, labore atque unde fugit esse molestias alias quo
          nisi.
          ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          molestias consectetur! Debitis, non aut ex, minima nisi ullam qui
          officiis magnam omnis unde quia! Eum rerum voluptates, aspernatur
          corporis, debitis at, labore atque unde fugit esse molestias alias quo
          nisi.ipsum 
          <br/>
          <br/>

          dolor sit amet consectetur adipisicing elit. Quaerat,
          molestias consectetur! Debitis, non aut ex, minima nisi ullam qui
          officiis magnam omnis unde quia! Eum rerum voluptates, aspernatur
          corporis, debitis at, labore atque unde fugit esse molestias alias quo
          nisi. as consectetur! Debitis, non aut ex, minima nisi ullam qui
          officiis magnam omnis unde quia! Eum rerum voluptates, aspernatur
          corporis, debitis aas consectetur! Debitis, non aut ex, minima nisi ullam qui
          officiis magnam omnis unde quia! Eum rerum voluptates, aspernatur
          corporis, debitis a
          as consectetur! Debitis, non aut ex, minima nisi ullam qui
          officiis magnam omnis unde quia! Eum rerum voluptates, aspernatur
          corporis, debitis a
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
