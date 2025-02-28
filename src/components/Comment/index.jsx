import { HandsClapping, Trash } from "@phosphor-icons/react";
import styles from "./index.module.css";
import { Avatar } from "../Avatar";

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        urlImage="https://avatars.githubusercontent.com/u/45239448?v=4"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fernanda Kimie</strong>
              <time
                title="11 de Maio às 11:13:00"
                dateTime="2022-05-11 08:13:30"
              >
                Cerca de 1 h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <HandsClapping />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
