import React from "react";
import StudentCard from "./StudentCard";
 
const students = [
  {
    name: "Alice Johnson",
    age: 22,
    course: "Computer Science",
    isGraduated: true,
    skills: ["React", "Node.js", "Python"],
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Bob Smith",
    age: 20,
    course: "Mechanical Engineering",
    isGraduated: false,
    skills: ["CAD", "SolidWorks", "Matlab"],
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Clara Lee",
    age: 23,
    course: "Design",
    isGraduated: true,
    skills: ["Figma", "Illustrator", "Photoshop"],
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];
 
const StudentList = () => {
  return (
    <div style={styles.container}>
      {students.map((student, index) => (
        <StudentCard key={index} {...student} />
      ))}
    </div>
  );
};
 
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};
 
export default StudentList;