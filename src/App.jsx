import styles from "./App.module.scss";
import illustration from "./assets/images/illustration-article.svg";
import authorPicture from "./assets/images/image-avatar.webp";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img className={styles.illustration} src={illustration} alt="illustration" />
        <div className={styles["card-text"]}>
          <div className={styles.tags}>
            <span>Learning</span>
          </div>
          <h3>Published 21 Dec 2023</h3>
          <h2>
            <a href="#">HTML & CSS foundations</a>
          </h2>
          <p>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <div className={styles.author}>
            <img src={authorPicture} alt="author" />
            <span>Greg Hooper</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
