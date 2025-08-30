// TaskList.jsx
import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, taskName: "Learn React", isCompleted: false },
        { id: 2, taskName: "Do Homework", isCompleted: false },
        { id: 3, taskName: "Read a Book", isCompleted: true },
      ],
      newTask: "", // input field state
    };
  }

  // Mark task as completed
  markTaskDone = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: true } : task
      ),
    }));
  };

  // Handle input change
  handleInputChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  // Add new task
  addTask = () => {
    if (this.state.newTask.trim() === "") return; // avoid empty task
    const newTaskObj = {
      id: Date.now(),
      taskName: this.state.newTask,
      isCompleted: false,
    };
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTaskObj],
      newTask: "",
    }));
  };

  render() {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 border rounded-xl shadow-md bg-white">
        <h2 className="text-xl font-bold mb-4 text-center">📋 Task Manager</h2>

        {/* Input box for adding new tasks */}
        <div className="flex mb-4">
          <input
            type="text"
            value={this.state.newTask}
            onChange={this.handleInputChange}
            placeholder="Enter new task..."
            className="flex-1 border rounded-l-lg px-3 py-2"
          />
          <button
            onClick={this.addTask}
            className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        {this.state.tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks yet. Add one!</p>
        ) : (
          this.state.tasks.map((task) => (
            <TaskItem
              key={task.id}
              taskName={task.taskName}
              isCompleted={task.isCompleted}
              onMarkDone={() => this.markTaskDone(task.id)}
            />
          ))
        )}
      </div>
    );
  }
}

export default TaskList;
