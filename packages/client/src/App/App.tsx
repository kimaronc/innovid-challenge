import * as React from "react";
import Window from './components/window'

import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <main className={styles.container}>
      <Window serverId="1"/>
      <Window serverId="2"/>
      <Window serverId="3"/>
      <Window serverId="4"/>
    </main>
  );
};

export default App