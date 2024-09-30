# C20-Portfolio

## Description

This is a personal portfolio website built with React, showcasing my skills, projects, and professional information as a Software Engineer. The portfolio is designed to provide visitors with an overview of my experience, technical proficiencies, and a showcase of my recent projects.

**Note:** Much of the code in this project has been reused and adapted from my previous portfolio project, which can be found at [Portfolio-Project](https://github.com/Mountainmancodes/Portfolio-Project). This new version represents an adaptation of that project, incorporating new features and improvements based on the needs of the project.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Code Reuse and Attribution](#code-reuse-and-attribution)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Responsive design that works on desktop and mobile devices
- About Me section with a brief bio and professional summary
- Portfolio section showcasing projects with links to live sites and GitHub repositories
- Skills section highlighting technical proficiencies
- Downloadable resume
- Contact form for easy communication
- Integration with GitHub API to dynamically fetch and display project information

## Technologies Used

- React
- React Router for navigation
- Vite as the build tool
- Pico CSS for minimal, responsive styling
- Custom CSS for styling
- React Icons for icon components
- GitHub API for fetching project data

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/Mountainmancodes/portfolio.git
   ```
2. Navigate to the project directory:
   ```
   cd portfolio
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your GitHub API URL:
   ```
   VITE_GITHUB_API_URL=https://api.github.com
   ```

## Usage

To run the development server:

```
npm run dev
```

This will start the development server, typically at `http://localhost:3000`.

To build the project for production:

```
npm run build
```

This will generate a production-ready build in the `dist` directory.

To preview the production build:

```
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Project.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── assets/
│   │   └── images/
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── assets/
│       └── images/
├── index.html
├── package.json
├── vite.config.js
├── .eslintrc.cjs
└── README.md
```

## Code Reuse and Attribution

This project builds upon and refines code from my previous portfolio project. The original project, which served as a foundation for this work, can be found at:

[Portfolio-Project](https://github.com/Mountainmancodes/Portfolio-Project)

## Deployment

This project is deployed on Netlify. The live version can be accessed at:
[C20-Portfolio](https://66f9f83d79f4020008554020--gleaming-croquembouche-9e820f.netlify.app/)

For deploying your own version, follow the platform-specific instructions for deploying a Vite React app on your chosen hosting platform.

## Contributing

While this is a personal portfolio project, suggestions and feedback are welcome. Please open an issue to discuss any changes you'd like to propose.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- GitHub: [@mountainmancodes](https://github.com/mountainmancodes)
- Email: Colorado.JHernandez@gmail.com

Feel free to reach out if you have any questions or would like to connect!