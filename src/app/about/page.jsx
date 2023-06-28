import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1687789256307-839c77ed376d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1633&q=80"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <p className={styles.imgDesc}>
            Handcrafting award winning digital experience{" "}
          </p>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h2 className={styles.title}>Who Are We?</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            delectus alias quisquam magnam vitae tempora consequuntur. In
            aperiam quaerat iste nobis id minus dolore? Ipsum ut, totam sapiente
            vel debitis amet
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            mollitia fuga iure nobis, temporibus omnis reprehenderit magni culpa
            repudiandae consequatur. inventore et nihil rem maxime consectetur,
            rerum saepe eligendi! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ad, quod?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
            necessitatibus voluptate fugiat architecto reprehenderit, porro
            error nulla mollitia iure sunt amet et vero quos cumque deleniti!
            In, distinctio libero, labore, eos qui magni quis nihil ipsum ad
            dolorem sequi voluptatem!
          </p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.title}>What We Do?</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            delectus alias quisquam magnam vitae tempora consequuntur. In
            aperiam quaerat iste nobis id minus dolore? Ipsum ut, totam sapiente
            vel debitis amet inventore et nihil rem maxime consectetur, rerum
            saepe eligendi! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Ad, quod? vel debitis amet inventore et nihil rem maxime
            consectetur, rerum saepe eligendi! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Ad, quod?
            <br />
            <br /> - Dynamic Website
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile App
            <br />
            <br />
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
