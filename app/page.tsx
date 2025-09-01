import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>Super page title</h1>
      <Image
        src="https://cdn.pixabay.com/photo/2025/08/21/09/51/rouen-cathedral-9787080_1280.jpg"
        width={500}
        height={500}
        alt="My image"
      />

      {/* <Image src="/pepegym.jpeg" width={300} height={300} alt="Pepe image" /> */}

      <main>
        <ol>
          <li>
            Get started by editing <code>app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
      </main>
    </div>
  );
}
