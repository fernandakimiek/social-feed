import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./index.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar urlImage="https://avatars.githubusercontent.com/u/45239448?v=4" />

          <div className={styles.authorInfo}>
            <strong>Fernanda Kishimoto</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 11:13:00" dateTime="2022-05-11 08:13:30">
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          <a href="">jane.design/doctorcare </a>
        </p>

        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>{" "}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
