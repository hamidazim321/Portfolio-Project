const DesktopWidth = 767
const DeskProjects = [
  {
    id: 'p1',
    recent: true,
    name: 'Multi-Post Stories',
    description: `A daily selection of privately personalized
    reads; no accounts or sign-ups required.
    has been the industry's standard dummy
    text ever since the 1500s, when an
    unknown printer took a standard dummy
    text.`,
    featuredImage: 'Works-Images/Img Placeholder.png',
    backgroundImage: null,
    technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    linkTolive: 'link 1',
    linkTosource: 'link 1',
    button: true
  },
   {
    id: 'p2',
    name: null,
    description: null,
    featuredImage: null,
    backgroundImage: 'Background-Images/Img Placeholder (1).png',
    technologies: null,
    linkTolive: 'link 1',
    linkTosource: 'link 1',
    button: true
  },
  {
    id: 'p3',
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. Has been the industry's standard.`,
    featuredImage: null,
    backgroundImage: 'Background-Images/Center-bg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkTolive: 'link 2',
    linkTosource: 'link 2',
    button: false
  },
  {
    id: 'p4',
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. Has been the industry's standard.`,
    featuredImage: null,
    backgroundImage: 'Background-Images/last-card-bg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkTolive: 'link 3',
    linkTosource: 'link 3',
    button: false
  },
  {
    id: 'p5',
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. Has been the industry's standard.`,
    featuredImage: null,
    backgroundImage: 'Works-Images/sec-2-bg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkTolive: 'link 4',
    linkTosource: 'link 4',
    button: false
  },
  {
    id: 'p6',
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. Has been the industry's standard.`,
    featuredImage: null,
    backgroundImage: 'Background-Images/Center-bg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkTolive: 'link 5',
    linkTosource: 'link 5',
    button: false
  },
  {
    id: 'p7',
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. Has been the industry's standard.`,
    featuredImage: null,
    backgroundImage: 'Background-Images/last-card-bg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkTolive: 'link 5',
    linkTosource: 'link 5',
    button: false
  }
]

const MobileProjects = [
  {
    id: 'p1',
    recent: true,
    name: 'Multi-Post Stories',
    description: `A daily selection of privately personalized
    reads; no accounts or sign-ups required.
    has been the industry's standard dummy
    text ever since the 1500s, when an
    unknown printer took a standard dummy
    text.`,
    featuredImage: 'Works-Images/Img Placeholder.png',
    backgroundImage: null,
    technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    linkTolive: 'link 1',
    linkTosource: 'link 1',
    button: true
  },
  {
    id: 'p2',
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. Has been the industry's standard.`,
    featuredImage: null,
    backgroundImage: 'Works-Images/sec-2-bg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkTolive: 'link 1',
    linkTosource: 'link 1',
    button: true
    
 },
 {
   id: 'p3',
   name: 'Professional Art Printing Data',
   description: `A daily selection of privately personalized reads; 
   no accounts or sign-ups required. Has been the industry's standard.`,
   featuredImage: null,
   backgroundImage: 'Works-Images/sec-2-bg.png',
   technologies: ['HTML', 'Bootstrap', 'Ruby'],
   linkTolive: 'link 2',
   linkTosource: 'link 2',
   button: true
 },
 {
   id: 'p4',
   name: 'Professional Art Printing Data',
   description: `A daily selection of privately personalized reads; 
   no accounts or sign-ups required. Has been the industry's standard.`,
   featuredImage: null,
   backgroundImage: 'Works-Images/sec-2-bg.png',
   technologies: ['HTML', 'Bootstrap', 'Ruby'],
   linkTolive: 'link 3',
   linkTosource: 'link 3',
   button: true
 },
 {
   id: 'p5',
   name: 'Professional Art Printing Data',
   description: `A daily selection of privately personalized reads; 
   no accounts or sign-ups required. Has been the industry's standard.`,
   featuredImage: null,
   backgroundImage: 'Works-Images/sec-2-bg.png',
   technologies: ['HTML', 'Bootstrap', 'Ruby'],
   linkTolive: 'link 4',
   linkTosource: 'link 4',
   button: true
 },
 {
   id: 'p6',
   name: 'Professional Art Printing Data',
   description: `A daily selection of privately personalized reads; 
   no accounts or sign-ups required. Has been the industry's standard.`,
   featuredImage: null,
   backgroundImage: 'Works-Images/sec-2-bg.png',
   technologies: ['HTML', 'Bootstrap', 'Ruby'],
   linkTolive: 'link 5',
   linkTosource: 'link 5',
   button: true
 },
 {
    id: 'p7',
    name: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. Has been the industry's standard.`,
    featuredImage: null,
    backgroundImage: 'Works-Images/sec-2-bg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    linkTolive: 'Works-Images/sec-2-bg.png',
    linkTosource: 'link 5',
    button: true
}
]

function loadModals(id,Object) {
  let Modal = document.querySelector('#modal')
  let modalTitle = document.querySelector('#modal-title')
  let titleText = modalTitle.innerText
  let ModalList = document.querySelector("#modal-icons")
  let listHTML = ModalList.innerHTML
  let ModalPoster = document.querySelector("#modal-poster")
  let posterSRC = ModalPoster.src
  let ModalDescription = document.querySelector("#Modal-Description")
  let descripText = ModalDescription.textContent
  let CloseModal = document.querySelector('#modal-close')
  let BlurBackground = document.querySelector('#overlay')

  if (Object.name !== null){
    modalTitle.innerText = Object.name;
  }
  if (Object.featuredImage !== null){
    ModalPoster.src = Object.featuredImage;
  }
  if (Object.technologies !== null && Array.isArray(Object.technologies)){
    ModalList.innerHTML = ""
    Object.technologies.forEach((tech) => {
      let techLi = document.createElement('li');
      techLi.innerText = tech;
      ModalList.appendChild(techLi);
      });
  }
  if (Object.description !== null){
    ModalDescription.innerText = Object.description
  }
  CloseModal.addEventListener('click',()=>{
    Modal.style.visibility = 'hidden'
    BlurBackground.style.visibility = 'hidden'
    modalTitle.innerText = titleText
    ModalPoster.src = posterSRC
    ModalList.innerHTML = listHTML
    ModalDescription.innerText = descripText
  })
  Modal.style.visibility = 'visible'
  BlurBackground.style.visibility = 'visible'

}

function LoadProjects (){
  let MainContainer = document.querySelector('#Portfolio')
  let Projects;
  if (window.innerWidth < DesktopWidth){
    Projects = MobileProjects
  }
  else{
    Projects = DeskProjects
  }
  