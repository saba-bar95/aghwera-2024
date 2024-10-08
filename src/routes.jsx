import App from "./App.jsx";
import Questionnaires from "./Pages/Questionnaires/Questionnaires.jsx";
import Methodology from "./Pages/Methodology/Methodology.jsx";
import Results from "./Pages/Results/Results.jsx";
import Goals from "./Pages/Goals/Goals.jsx";
import LegalBasis from "./Pages/LegalBasis/LegalBasis.jsx";
import ScrollToTop from "./ScrollToTop";
import Date from "./Pages/Date/Date.jsx";

const routes = [
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
  },
  {
    path: "main",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
  },
  {
    path: "questionnaries",
    element: (
      <>
        <ScrollToTop />
        <Questionnaires />
      </>
    ),
  },
  {
    path: "date",
    element: (
      <>
        <ScrollToTop />
        <Date />
      </>
    ),
  },
  {
    path: "methodology",
    element: (
      <>
        <ScrollToTop />
        <Methodology />
      </>
    ),
  },
  {
    path: "results",
    element: (
      <>
        <ScrollToTop />
        <Results />
      </>
    ),
  },
  {
    path: "vacancies",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
  },
  {
    path: "goals",
    element: (
      <>
        <ScrollToTop />
        <Goals />
      </>
    ),
  },
  {
    path: "legalbasis",
    element: (
      <>
        <ScrollToTop />
        <LegalBasis />
      </>
    ),
  },
];

export default routes;
