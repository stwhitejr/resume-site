import ScrollContainer from './components/ScrollContainer';
import Router from './components/Router';
import IntroPage from './pages/IntroPage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import ProjectsPage from './pages/ProjectsPage';
import {ScrollContextProvider} from './context/ScrollContext';

const App = () => {
  return (
    <Router>
      <ScrollContextProvider>
        <div className="relative h-full md:h-screen w-screen overflow-hidden">
          <Header />
          <ScrollContainer>
            <IntroPage />
            <AboutPage />
            <ExperiencePage />
            <ProjectsPage />
            <ContactPage />
          </ScrollContainer>
        </div>
      </ScrollContextProvider>
    </Router>
  );
};

export default App;
