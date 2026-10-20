import { useState } from 'react';
import { projects } from './data/projects.js';
import Header from './components/Header.jsx';
import ProjectList from './components/ProjectList.jsx';
import TagFilter from './components/TagFilter.jsx';
import ContactForm from './components/ContactForm.jsx';
import { GitHubRepos } from './components/GitHubRepos.jsx';
import './index.css';

const tags = [...new Set(
  projects.flatMap((p) => p.tags),
)];

export default function App() {
  const [activeTag, setActiveTag] = useState('all');

  const shown = activeTag === 'all'
    ? projects
    : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <main className="container">
      <Header />
      <TagFilter
        tags={tags}
        activeTag={activeTag}
        onChange={setActiveTag}
      />
      <ProjectList projects={shown} />
      <section id="github-repos">
        <h2>Repo GitHub</h2>
        <GitHubRepos username="thienlam23130146" />
      </section>
      <section id="contact">
        <h2>Liên hệ</h2>
        <ContactForm />
      </section>
    </main>
  );
}