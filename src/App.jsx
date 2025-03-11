import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://i.pinimg.com/736x/27/37/df/2737df777c77ec625810d903d2ee98e1.jpg",
      name: "Junior Avatar",
      role: "Desenvolvedor",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Estou criando um novo projeto, acessem meu link e me dêem feedbacks!🚀",
      },
      { type: "link", content: "github.com/junior.avatar" },
    ],
    publishedAt: new Date("2025-02-26 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://play-lh.googleusercontent.com/2-Mw1u0zRRb8bbe-AQe_MPIMqk_8MBT9ojoVZL3FER0HAYwJpq6KW4Ebg3AYbuS0dw",
      name: "Ayaka",
      role: "Desenvolvedora Senior",
    },
    content: [
      { type: "paragraph", content: "Hello!!" },
      {
        type: "paragraph",
        content: "Tenham um excelente diaaa!",
      },
    ],
    publishedAt: new Date("2025-02-10 20:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
