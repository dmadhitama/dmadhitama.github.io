# Content Management Guide

This portfolio uses a **markdown-based content management system**. All content is stored in markdown files in the `content/` folder. Simply edit these files to update your portfolio!

## 📁 Content Structure

```
content/
├── bio.md          # Personal information and bio
├── experience.md   # Work experience
├── education.md    # Educational background
├── skills.md       # Technical skills
└── interests.md    # Professional and personal interests
```

## ✏️ How to Edit Content

### 1. Personal Information (`content/bio.md`)

Edit the frontmatter (between `---`) to update your basic information:

```markdown
---
name: "Your Name"
label: "Your Title"
email: "your.email@example.com"
website: "https://yourwebsite.com"
summary: "Your professional summary"
location:
  city: "Your City"
  countryCode: "US"
profiles:
  - network: "GitHub"
    username: "yourusername"
    url: "https://github.com/yourusername"
  - network: "LinkedIn"
    username: "yourname"
    url: "https://linkedin.com/in/yourname"
---

# About Me

Write your extended bio here...
```

### 2. Work Experience (`content/experience.md`)

Add your work history in markdown format:

```markdown
# Work Experience

## Job Title
**Company Name** | *Start Date - End Date*

- Bullet point about your responsibilities
- Another achievement or responsibility
- Key accomplishment with metrics

**Technologies:** List, of, technologies, used

---

## Previous Job Title
**Previous Company** | *Start Date - End Date*

...
```

### 3. Education (`content/education.md`)

List your educational background:

```markdown
# Education

## Degree Name
**University Name** | *Start Year - End Year*

- Major/Specialization details
- Notable achievements
- GPA (optional)

---

## Another Degree
...
```

### 4. Skills (`content/skills.md`)

Organize your skills by category:

```markdown
# Skills

## Category Name
- **Proficiency Level:** Skill 1, Skill 2, Skill 3
- **Another Level:** More skills

## Another Category
- List of skills
- More skills
```

### 5. Interests (`content/interests.md`)

Share your professional and personal interests:

```markdown
# Interests

## Professional Interests
- **Topic:** Description of your interest
- **Another Topic:** More details

## Personal Interests
- Hobby or interest
- Another interest
```

## 🎨 Markdown Formatting

You can use standard markdown formatting in all content files:

- **Bold text**: `**bold**`
- *Italic text*: `*italic*`
- [Links](url): `[text](url)`
- Lists: Use `-` or `*` for bullets
- Headings: Use `#`, `##`, `###` etc.
- Code: Use backticks for `inline code`
- Horizontal rules: `---`

## 📝 Adding Projects

Projects are stored in the `projects/` folder. Create a new `.md` file:

```markdown
---
layout: project
type: project
image: img/project-image.png
title: "Project Title"
date: 2024
published: true
labels:
  - Technology 1
  - Technology 2
summary: "Brief project description"
---

## Project Overview

Detailed description of your project...

## Key Features

- Feature 1
- Feature 2

## Technologies Used

List of technologies...

## Results

Impact and outcomes...
```

## 📄 Adding Essays/Blog Posts

Essays are stored in the `essays/` folder. Create a new `.md` file:

```markdown
---
layout: essay
type: essay
title: "Essay Title"
date: 2024-01-01
published: true
labels:
  - Topic 1
  - Topic 2
---

Your essay content here...
```

## 🖼️ Adding Images

1. Place images in the `img/` or `public/` folder
2. Reference them in markdown:
   - For projects: `image: img/your-image.png`
   - In content: `![Alt text](../img/your-image.png)`

## 🚀 Publishing Changes

After editing content files:

1. **Save your changes**
2. **Test locally**:
   ```bash
   npm run dev
   ```
3. **Build for production**:
   ```bash
   npm run build
   ```
4. **Deploy** to your hosting platform

## 💡 Tips

- **Keep it simple**: Markdown is meant to be easy to read and write
- **Be consistent**: Use the same formatting style across all files
- **Use headings**: Organize content with clear section headings
- **Add context**: Include dates, technologies, and metrics where relevant
- **Proofread**: Check for typos before publishing

## 🔄 Content Updates

To update your portfolio:

1. Edit the relevant `.md` file in the `content/` folder
2. Save the file
3. The changes will appear automatically when you rebuild the site

No database, no admin panel, no complicated CMS - just simple markdown files!

## 📚 Examples

Check the existing content files for examples of how to structure your content. Each file includes sample data that you can replace with your own information.

---

**Need help?** All content files include examples and comments to guide you. Just follow the existing format and replace with your own information!
