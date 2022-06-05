import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import { Navigation } from "./components/navigation/Navigation";
import MostDiscussed from "./pages/mostDiscussed/MostDiscussed";
import CoursesPage from "./pages/courses/CoursesPage";
import CourseDetailPage from "./pages/courseDetailPage/CourseDetailPage";
import SignUpPage from "./pages/signUp/SignUpPage";
import LoginPage from "./pages/login/LoginPage";

function App() {
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
        <Route
          exact
          path="/courses/mostDiscussed"
          element={<MostDiscussed />}
        />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
