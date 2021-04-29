import React from "react";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };
  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };
  render() {
    return (
      <form>
        <h2>Course</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default CoursesPage;
