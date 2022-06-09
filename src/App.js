import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import { Navigation } from "./components/navigation/Navigation";
import CoursesPage from "./pages/courses/CoursesPage";
import CourseDetailPage from "./pages/courseDetailPage/CourseDetailPage";
import SignUpPage from "./pages/signUp/SignUpPage";
import LoginPage from "./pages/login/LoginPage";
import AddCoursesPage from "./pages/courses/addCourse/AddCoursePage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { validateToken } from "./store/auth/action";
import ProfilePage from "./pages/profilePage/ProfilePage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validateToken);
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/languages/:languageId" element={<CoursesPage />} />
        <Route
          exact
          path="/languages/:languageId/courses/:courseId"
          element={<CourseDetailPage />}
        />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/addcourse" element={<AddCoursesPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
