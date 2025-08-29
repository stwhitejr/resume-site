import ScrollContainer from './components/ScrollContainer';
import Router from './components/Router';
import IntroPage from './pages/IntroPage';
import SalesPitchPage from './pages/SalesPitchPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import ProjectsPage from './pages/ProjectsPage';

const App = () => {
  return (
    <Router>
      <div className="h-screen w-screen overflow-hidden flex flex-col">
        <Header />
        <ScrollContainer>
          <IntroPage />
          <SalesPitchPage />
          <ExperiencePage />
          <ProjectsPage />
          <ContactPage />
        </ScrollContainer>
      </div>
    </Router>
  );
};

export default App;
