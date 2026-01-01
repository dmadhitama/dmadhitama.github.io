export interface Bio {
  basics: {
    name: string;
    label: string;
    picture: string;
    email: string;
    website: string;
    summary: string;
    location?: {
      city: string;
      region: string;
    };
    phone?: string;
    profiles: {
      network: string;
      username: string;
      url: string;
    }[];
  };
  interests: {
    name: string;
    keywords?: string[];
  }[];
  skills: {
    name: string;
    keywords: string[];
  }[];
  education: {
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    courses?: string[];
  }[];
  work: {
    company: string;
    position: string;
    website: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
  }[];
  volunteer?: {
    organization: string;
    position: string;
    website?: string;
    startDate: string;
    endDate: string;
    summary?: string;
    highlights?: string[];
  }[];
  awards?: {
    title: string;
    date: string;
    awarder: string;
    summary?: string;
  }[];
  references?: {
    name: string;
    reference: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  date: string;
  published: boolean;
  image: string;
  labels: string[];
  summary: string;
  content: string;
}

export interface Essay {
  id: string;
  title: string;
  date: string;
  published: boolean;
  labels: string[];
  content: string;
}
