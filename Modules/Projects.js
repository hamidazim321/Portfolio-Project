const DesktopWidth = 767;
const DeskProjects = [
  {
    id: 'p1',
    recent: true,
    name: 'To-Do list App',
    description: `To-do list is a handy app that lets you organize and track your daily tasks. You can create, 
    edit, delete, and mark tasks as complete with ease. You can also remove all the completed tasks with one 
    click. Your tasks are saved in the local storage, so they are always there when you need them. To-do list 
    helps you manage your time and reach your goals.`,
    modalDescription: `To-do list is a web app that showcases the power of HTML, CSS, and JavaScript. 
    It leverages Webpack as a module bundler and ES6 modules to structure the code in a modular way. It
    also enhances the user interface with font awesome library, which provides a variety of icons to choose from.`,
    featuredImage: 'Projects-Images/To-Do List SC1.png',
    backgroundImage: null,
    technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    linkTolive: 'https://hamidazim321.github.io/To-do-list/dist/?',
    linkTosource: 'https://github.com/hamidazim321/To-do-list',
    button: true,
  },
  {
    id: 'p2',
    name: null,
    description: null,
    featuredImage: null,
    backgroundImage: 'Background-Images/Img Placeholder (1).png',
    technologies: null,
    linkTolive: '',
    linkTosource: '',
    button: true,
  },
  {
    id: 'p3',
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. Has been the industry's standard.`,
    featuredImage: null,
    backgroundImage: 'Background-Images/Center-bg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkTolive: '',
    linkTosource: '',
    button: false,
  },
  {
    id: 'p4',
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. Has been the industry's standard.`,
    featuredImage: null,
    backgroundImage: 'Background-Images/last-card-bg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkTolive: '',
    linkTosource: '',
    button: false,
  },
  {
    id: 'p5',
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. Has been the industry's standard.`,
    featuredImage: null,
    backgroundImage: 'Works-Images/sec-2-bg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkTolive: '',
    linkTosource: '',
    button: false,
  },
  {
    id: 'p6',
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. Has been the industry's standard.`,
    featuredImage: null,
    backgroundImage: 'Background-Images/Center-bg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkTolive: '',
    linkTosource: '',
    button: false,
  },
  {
    id: 'p7',
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. Has been the industry's standard.`,
    featuredImage: null,
    backgroundImage: 'Background-Images/last-card-bg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkTolive: '',
    linkTosource: '',
    button: false,
  },
];

const MobileProjects = [
  {
    id: 'p1',
    recent: true,
    name: 'To-Do list App',
    description: `A daily selection of privately personalized
    reads; no accounts or sign-ups required.
    has been the industry's standard dummy
    text ever since the 1500s, when an
    unknown printer took a standard dummy
    text.`,
    modalDescription: `To-do list is a web app that showcases the power of HTML, CSS, and JavaScript. 
    It leverages Webpack as a module bundler and ES6 modules to structure the code in a modular way. It
    also enhances the user interface with font awesome library, which provides a variety of icons to choose from.`,
    featuredImage: 'Projects-Images/To-Do List SC1(mobile).png',
    backgroundImage: null,
    technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    linkTolive: 'https://hamidazim321.github.io/To-do-list/dist/?',
    linkTosource: 'https://github.com/hamidazim321/To-do-list',
    button: true,
  },
  {
    id: 'p2',
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. Has been the industry's standard.`,
    featuredImage: null,
    backgroundImage: 'Works-Images/sec-2-bg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkTolive: '',
    linkTosource: '',
    button: true,

  },
  {
    id: 'p3',
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; 
   no accounts or sign-ups required. Has been the industry's standard.`,
    featuredImage: null,
    backgroundImage: 'Works-Images/sec-2-bg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkTolive: '',
    linkTosource: '',
    button: true,
  },
  {
    id: 'p4',
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; 
   no accounts or sign-ups required. Has been the industry's standard.`,
    featuredImage: null,
    backgroundImage: 'Works-Images/sec-2-bg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkTolive: '',
    linkTosource: '',
    button: true,
  },
  {
    id: 'p5',
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; 
   no accounts or sign-ups required. Has been the industry's standard.`,
    featuredImage: null,
    backgroundImage: 'Works-Images/sec-2-bg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkTolive: '',
    linkTosource: '',
    button: true,
  },
  {
    id: 'p6',
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; 
   no accounts or sign-ups required. Has been the industry's standard.`,
    featuredImage: null,
    backgroundImage: 'Works-Images/sec-2-bg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkTolive: '',
    linkTosource: '',
    button: true,
  },
  {
    id: 'p7',
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. Has been the industry's standard.`,
    featuredImage: null,
    backgroundImage: 'Works-Images/sec-2-bg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkTolive: '',
    linkTosource: '',
    button: true,
  },
];

function loadModals(project) {
  const Modal = document.querySelector('#modal');
  const modalTitle = Modal.querySelector('#modal-title');
  const modalPoster = Modal.querySelector('#modal-poster');
  const CloseModal = Modal.querySelector('#modal-close');
  const BlurBackground = document.querySelector('#overlay');
  const modalDesctription = Modal.querySelector('#Modal-Description');
  const modalButtons = [...Modal.querySelectorAll('#modal-buttons button')];

  const defaultDescription = modalDesctription.textContent;
  const posterSRC = modalPoster.src;
  CloseModal.addEventListener('click', () => {
    Modal.style.visibility = 'hidden';
    BlurBackground.style.visibility = 'hidden';
    modalPoster.src = posterSRC;
    modalDesctription.textContent = defaultDescription;
  });

  Modal.style.visibility = 'visible';
  BlurBackground.style.visibility = 'visible';
  modalTitle.innerText = project.name;
  if (project.featuredImage !== null) {
    modalPoster.src = project.featuredImage;
  }
  if (project.modalDescription) {
    modalDesctription.textContent = project.modalDescription;
  }

  modalButtons.forEach((button) => {
    if (project.linkTolive !== '') {
      button.addEventListener('click', () => {
        if (button.id === 'see-live') {
          window.open(project.linkTolive, '_blank');
        }
        if (button.id === 'see-source') {
          window.open(project.linkTosource, '_blank');
        }
      });
    }
  });
}

function LoadProjects() {
  const MainContainer = document.querySelector('#Portfolio');
  MainContainer.innerHTML = '';
  let Projects;
  let ModalTitle;
  if (window.innerWidth < DesktopWidth) {
    Projects = MobileProjects;
  } else {
    Projects = DeskProjects;
    ModalTitle = document.querySelector('#modal-title');
    ModalTitle.textContent = 'Keeping track of hundreds  of components website';
  }

  Projects.forEach((project) => {
    // Make Empty elements
    const ProjectContainer = document.createElement('div');
    const name = document.createElement('h2');
    const description = document.createElement('p');
    const technologies = document.createElement('ul');

    // Add Data To Elements
    if (project.recent) {
      const ProjectCard = document.createElement('div');
      const ImageHolder = document.createElement('div');
      const ProjectData = document.createElement('div');
      const featureImage = document.createElement('img');
      const hr = document.createElement('hr');
      const title = document.createElement('h1');
      let button;
      if (project.name !== null) {
        name.innerText = project.name;
        name.classList.add('h2-dark');
        ProjectData.appendChild(name);
      }
      if (project.description !== null) {
        description.innerText = project.description.replace(/[\n\r]/g, '');
        description.classList.add('p-dark');
        ProjectData.appendChild(description);
      }
      if (project.technologies !== null && Array.isArray(project.technologies)) {
        project.technologies.forEach((tech) => {
          const techLi = document.createElement('li');
          techLi.innerText = tech;
          technologies.appendChild(techLi);
        });
      }
      if (featureImage !== null) {
        featureImage.src = project.featuredImage;
        ImageHolder.appendChild(featureImage);
      }
      if (project.button) {
        button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = 'See Project';
        button.id = project.id;
        button.addEventListener('click', () => { loadModals(project); });
      }
      title.innerText = 'My Recent Works';

      // Add classes to Elements
      ProjectContainer.classList.add('sec-1');
      ImageHolder.classList.add('img');
      ProjectData.classList.add('description');
      ProjectContainer.classList.add('Recent-Project');
      ProjectCard.classList.add('card-1');
      title.classList.add('h2-dark');
      featureImage.classList.add('poster');
      technologies.classList.add('ProjectTechs');
      name.classList.add('h3-dark');

      // Append Elements
      title.appendChild(hr);
      ProjectData.appendChild(technologies);
      ProjectData.appendChild(button);
      ProjectCard.appendChild(ImageHolder);
      ProjectCard.appendChild(ProjectData);
      ProjectContainer.appendChild(title);
      ProjectContainer.appendChild(ProjectCard);
      MainContainer.appendChild(ProjectContainer);
    } else {
      if (project.name !== null) {
        name.innerText = project.name;
        name.classList.add('h3-light');
        ProjectContainer.appendChild(name);
      }
      if (project.description !== null) {
        description.innerText = project.description;
        description.classList.add('p-light');
        ProjectContainer.appendChild(description);
      }
      if (project.technologies !== null && Array.isArray(project.technologies)) {
        project.technologies.forEach((tech) => {
          const techLi = document.createElement('li');
          techLi.innerText = tech;
          technologies.appendChild(techLi);
        });
      }
      // Add Classes to Elements
      ProjectContainer.classList.add('previous-Projects');

      // Append Elements in Order
      if (technologies.querySelector('li') !== null) {
        ProjectContainer.appendChild(technologies);
        technologies.classList.add('ProjectTechs');
      }
      MainContainer.appendChild(ProjectContainer);

      // Add Button Conditionally

      if (project.button) {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = 'See Project';
        ProjectContainer.appendChild(button);
        button.id = project.id;
        button.addEventListener('click', () => { loadModals(project); });
      } else {
        ProjectContainer.id = project.id;
        ProjectContainer.addEventListener('click', () => { loadModals(project); });
        ProjectContainer.style.cursor = 'pointer';
      }
    }

    // Add bg image
    ProjectContainer.style.backgroundImage = `url("${project.backgroundImage}")`;
  });
}

export {
  LoadProjects, DeskProjects, MobileProjects, DesktopWidth,
};
