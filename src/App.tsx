import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import {
  Hero,
  Navigation,
  Welcome,
  Schedule,
  Venues,
  Travel,
  Lodging,
  Contact,
  Footer,
} from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navigation />
      <main>
        <Hero />
        <Welcome />
        <Schedule />
        <Venues />
        <Travel />
        <Lodging />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
