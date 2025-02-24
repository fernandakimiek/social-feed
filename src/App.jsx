import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Diego Fernandes" content="Teste" />
          <Post author="Diego Fernandes" content="Teste" />
        </main>
      </div>
    </>
  );
}

export default App;
