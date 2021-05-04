import React from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class ManageCoursesPage extends React.Component {
  componentDidMount() {
    const { courses, authors, loadAuthors, loadCourses } = this.props;
    if (courses.length === 0) {
      loadCourses().catch((err) => console.error(err));
    }
    if (authors.length === 0) {
      loadAuthors().catch((err) => console.error(err));
    }
  }

  render() {
    return (
      <>
        <h2>Manage Courses</h2>
      </>
    );
  }
}

ManageCoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  authors: PropTypes.array.isRequired,
};

//same as state => return courses: state.courses
function mapStateToProps(state) {
  return {
    authors: state.authors,
    courses: state.courses,
  };
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage);
