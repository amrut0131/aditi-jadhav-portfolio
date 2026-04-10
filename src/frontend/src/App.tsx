import { Layout } from "./components/Layout";
import { About } from "./pages/sections/About";
import { Contact } from "./pages/sections/Contact";
import { Education } from "./pages/sections/Education";
import { Goals } from "./pages/sections/Goals";
import { Hero } from "./pages/sections/Hero";
import { Skills } from "./pages/sections/Skills";

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Goals />
      <Education />
      <Contact />
    </Layout>
  );
}
