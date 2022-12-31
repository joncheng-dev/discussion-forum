import React from "react";
import Header from "./Header";
import PostList from "./PostList";
import SideBar from "./SideBar";

function App() {
  const styles = {
    container: {
      flex: 1,
      fontFamily: "IBMPlexSans, Arial, sans-serif",
    },
    header: {
      width: "100%",
      backgroundColor: "#eee",
    },
    column: {
      width: "50%",
    },
  };
  return (
    <React.Fragment>
      <div style={styles.container}>
        <Header style={styles.header} />
        <PostList />
        <SideBar />
      </div>
    </React.Fragment>
  );
}

export default App;
