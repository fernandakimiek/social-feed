import { HandsClapping, Trash } from "@phosphor-icons/react";
import styles from "./index.module.css";
import { Avatar } from "../Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);

    //para pegar o valor mais atualizado do state
    //setLikeCount((state) => state + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcnZ2SxXrWy85HZDwrfczPBSLZcFz0BObiSg&s"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>John</strong>
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
          <button onClick={handleLikeComment}>
            <HandsClapping />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
