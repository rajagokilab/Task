import React from "react";
import StudentList from "./components/StudentList";
 
const App = () => {
  return (
    <div style={styles.app}>
      <h1>🎓 Student Profile Dashboard</h1>
      <StudentList />
    </div>
  );
};
 
const styles = {
  app: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    margin:"80px",
    padding: "100px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
};
 
export default App;