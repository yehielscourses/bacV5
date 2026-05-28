import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { useProgress } from "./hooks/useProgress";
import { useTheme } from "./hooks/useTheme";
import { AxisDetailPage } from "./pages/AxisDetailPage";
import { AxesPage } from "./pages/AxesPage";
import { ConseilsPage } from "./pages/ConseilsPage";
import { HomePage } from "./pages/HomePage";
import { MethodesPage } from "./pages/MethodesPage";
import { QuizExamPage } from "./pages/QuizExamPage";

export default function App() {
  const {
    progress,
    completeAxis,
    saveQuizScore,
    saveExamScore,
    markDiagnosticDone,
  } = useProgress();
  const { theme, toggleTheme } = useTheme();

  return (
    <Routes>
      <Route element={<Layout progress={progress} theme={theme} onToggleTheme={toggleTheme} />}>
        <Route path="/" element={<HomePage onDiagnosticDone={markDiagnosticDone} />} />
        <Route path="/axes" element={<AxesPage progress={progress} />} />
        <Route
          path="/axes/:slug"
          element={
            <AxisDetailPage
              completed={progress.completedAxes}
              onCompleteAxis={completeAxis}
              onSaveQuiz={saveQuizScore}
            />
          }
        />
        <Route
          path="/quiz"
          element={<QuizExamPage onSaveQuiz={saveQuizScore} onSaveExam={saveExamScore} />}
        />
        <Route path="/methodes" element={<MethodesPage />} />
        <Route path="/conseils" element={<ConseilsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
