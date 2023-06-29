import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Create Portfolio</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque sint
            amet numquam soluta inventore in distinctio veritatis odio, quia
            voluptatem eum quaerat ad dignissimos fugiat. Illo quos maiores
            ipsam cumque. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Nesciunt, voluptates?
          </p>
          <Button text="See More" url="#" />
        </div>

        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1687816874718-c4e5f085296a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            fill
            alt=""
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Create Portfolio</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque sint
            amet numquam soluta inventore in distinctio veritatis odio, quia
            voluptatem eum quaerat ad dignissimos fugiat. Illo quos maiores
            ipsam cumque. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Nesciunt, voluptates?
          </p>
          <Button text="See More" url="#" />
        </div>

        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1685821935645-92a918ca51b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            fill
            alt=""
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Create Portfolio</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque sint
            amet numquam soluta inventore in distinctio veritatis odio, quia
            voluptatem eum quaerat ad dignissimos fugiat. Illo quos maiores
            ipsam cumque. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Nesciunt, voluptates?
          </p>
          <Button text="See More" url="#" />
        </div>

        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1539724728401-4337be9859ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            fill
            alt=""
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Create Portfolio</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque sint
            amet numquam soluta inventore in distinctio veritatis odio, quia
            voluptatem eum quaerat ad dignissimos fugiat. Illo quos maiores
            ipsam cumque. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Nesciunt, voluptates?
          </p>
          <Button text="See More" url="#" />
        </div>

        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1687763311035-3c5a5d0fd575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            fill
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
