import React from "react";
 
const StudentCard = ({ name, age, course, isGraduated, skills, photo }) => {
  return (
    <div style={styles.card}>
      <img src={photo} alt={name} style={styles.photo} />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>
        Status: {isGraduated ? "🎓 Graduated" : "❌ Still Studying"}
      </p>
      <h4>Skills:</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
 
// Inline styling (for simplicity)
const styles = {
  card: {
    border: "1px solid #ccc",
    text: "#000",
    borderRadius: "10px",
    padding: "15px",
    width: "250px",
    margin: "10px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  },
  photo: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "10px",
  },
};
 
export default StudentCard;