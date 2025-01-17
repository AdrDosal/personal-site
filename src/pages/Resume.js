import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Educación from '../components/Resume/Education';
import Experiencia from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Certificaciones from '../components/Resume/Courses';
import Referencias from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Educación: () => <Educación data={degrees} />,
  Experiencia: () => <Experiencia data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Certificaciones: () => <Certificaciones data={courses} />,
  Referencias: () => <Referencias />,
};

const Resume = () => (
  <Main
    title="CV"
    description="Curriculum de Adrian Dosal. Hiberus, Bahía Software, Capgemini, Universidad de Valencia."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Curriculum</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
