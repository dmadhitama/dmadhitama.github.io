import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Bio, Project, Essay } from './types';

const dataDirectory = path.join(process.cwd(), '_data');
const projectsDirectory = path.join(process.cwd(), 'projects');
const essaysDirectory = path.join(process.cwd(), 'essays');

export function getBio(): Bio {
  const filePath = path.join(dataDirectory, 'bio.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        id,
        title: data.title || '',
        date: data.date?.toString() || '',
        published: data.published !== false,
        image: data.image || '',
        labels: data.labels || [],
        summary: data.summary || '',
        content,
      };
    })
    .filter(project => project.published)
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

  return projects;
}

export function getProjectById(id: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id,
      title: data.title || '',
      date: data.date?.toString() || '',
      published: data.published !== false,
      image: data.image || '',
      labels: data.labels || [],
      summary: data.summary || '',
      content,
    };
  } catch {
    return null;
  }
}

export function getAllEssays(): Essay[] {
  if (!fs.existsSync(essaysDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(essaysDirectory);
  const essays = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(essaysDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        id,
        title: data.title || '',
        date: data.date?.toString() || '',
        published: data.published !== false,
        labels: data.labels || [],
        content,
      };
    })
    .filter(essay => essay.published)
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

  return essays;
}

export function getEssayById(id: string): Essay | null {
  try {
    const fullPath = path.join(essaysDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id,
      title: data.title || '',
      date: data.date?.toString() || '',
      published: data.published !== false,
      labels: data.labels || [],
      content,
    };
  } catch {
    return null;
  }
}
