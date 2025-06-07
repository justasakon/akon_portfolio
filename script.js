const mobileMenu = document.getElementById('mobile_menu');
mobileMenu.addEventListener('click', () => {
  const desktopMenu = document.getElementById('desktop_menu');
  desktopMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});
const projectCards = [
  {
    image: './assets/images/project_cardimg1.svg',
    headerOne: 'Tonic',
    paraOne: 'CANOPY',
    listOne: ['Back end Dev', 2025],
    paraTwo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    listTwo: ['HTML', 'CSS', 'JAVASCRIPT'],
    btn: 'See Project'
  },


   {
   image: './assets/images/project_cardimg1.svg',
   headerOne: 'Tonic',
   paraOne: 'CANOPY',
   listOne: ['Back end Dev', 2025],
   paraTwo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
   listTwo: ['HTML', 'CSS', 'JAVASCRIPT'],
   btn: 'See Project'
 },


  {
   image: './assets/images/project_cardimg1.svg',
   headerOne: 'Tonic',
   paraOne: 'CANOPY',
   listOne: ['Back end Dev', 2025],
   paraTwo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
   listTwo: ['HTML', 'CSS', 'JAVASCRIPT'],
   btn: 'See Project'
 },


  {
   image: './assets/images/project_cardimg1.svg',
   headerOne: 'Tonic',
   paraOne: 'CANOPY',
   listOne: ['Back end Dev', 2025],
   paraTwo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
   listTwo: ['HTML', 'CSS', 'JAVASCRIPT'],
   btn: 'See Project'
 },

 
  {
   image: './assets/images/project_cardimg1.svg',
   headerOne: 'Tonic',
   paraOne: 'CANOPY',
   listOne: ['Back end Dev', 2025],
   paraTwo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
   listTwo: ['HTML', 'CSS', 'JAVASCRIPT'],
   btn: 'See Project'
 },

 
  {
   image: './assets/images/project_cardimg1.svg',
   headerOne: 'Tonic',
   paraOne: 'CANOPY',
   listOne: ['Back end Dev', 2025],
   paraTwo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
   listTwo: ['HTML', 'CSS', 'JAVASCRIPT'],
   btn: 'See Project'
 },

];


// Dummy modal function to prevent error
function openModal() {
  console.log("Modal opened");
}

function renderProjectCards(projects) {
  const firstDiv = document.createElement('div');
  firstDiv.classList.add('project_card');

  const secondDiv = document.createElement('div');  // secondDiv.classList.add('card_img');
  const img = document.createElement('img');
  img.src = projects.image;
  img.alt = projects.headerOne;
  secondDiv.appendChild(img);

  const thirdDiv = document.createElement('div');
  thirdDiv.classList.add('card_details');

  const headingOne = document.createElement('h2');
  headingOne.textContent = projects.headerOne;

  const fourthDiv = document.createElement('div');
  fourthDiv.classList.add('card_sub_title');

  const paragraphOne = document.createElement('p');
  paragraphOne.textContent = projects.paraOne;

  const listItems = document.createElement('ul');
  projects.listOne.forEach((list) => {
    const li = document.createElement('li');
    li.textContent = list;
    listItems.appendChild(li);
  });

  fourthDiv.append(paragraphOne, listItems);

  const paragraphTwo = document.createElement('p');
  paragraphTwo.textContent = projects.paraTwo;

  const listItemsTwo = document.createElement('ul');
  listItemsTwo.classList.add('card_list');
  projects.listTwo.forEach((list) => {
    const li = document.createElement('li');
    li.textContent = list;
    listItemsTwo.appendChild(li);
  });

  const btn = document.createElement('button');
  btn.textContent = projects.btn;
  btn.addEventListener('click', openModal); 

  thirdDiv.append(headingOne, fourthDiv, paragraphTwo, listItemsTwo, btn);
  firstDiv.append(secondDiv, thirdDiv);

  return firstDiv;
}

const displayProjectCards = () => {
  const container = document.getElementById('project_cards');
  projectCards.forEach((project) => {
    const projectDisplay = renderProjectCards(project);
    container.appendChild(projectDisplay);
  });
};

//popup-window to visit projects
function openModal(project){
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.id = "project_modal";

  const modalContent = document.childElementCount('div');
  modalContent.classList.add('modal_modal');

  const closeButton = document.childElementCount('span');
  closeButton.classList.add(close_btn);
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click",closeModal);
  modalContent.appendChild(closeButton);

  const modalImage = Document.createElement('img');
  modalImage.classList.add('modal_image');
  modalImage.src = project.image;
  modalImage.alt = project_title;
  modalContent.appendChild(modalImage);

  const modalTitle = document.createElement('h1');
  modalTitle.textContent = project.title;
  modalContent.appendChild(modalTitle);

  const list = document.childElementCount('ul');
  list.id = "modaltecnologies";
  project.technologies.forEach(tech => {
    const listItems = document.createElement("li");
    listItems.innerHTML = tech;
    list.appendChild(listItems)})
    modalContent.appendChild(list);

    const modaDescription = document.createElement("p");
    modaDescription.classList.add("modal_description");
    modaDescription.textContent = project.description;
    modalContent.appendChild(modaDescription);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    modal.style.display="flex";

    const modalLink = document.createElement("div");
    modalLink.classList.add("modal_links");
    const githHubLink = document.createElement("a");
    githHubLink.classList.add("abt_btn");
    githHubLink.textContent = "see source";
    githHubLink.href = project.githHubLink;
    githHubLink.target = "#";
    modalLink.appendChild(githHubLink);

    const liveLink = document.childElement("a");
    liveLink.classList.add("abt_btn");
    liveLink.textContent = "see live";
    liveLink.hreff = project.liveLink;
    liveLink.target = "#";
    modalLink.appendChild(liveLink);
    modalContent.appendChild(modalLink);
}
 displayProjectCards();
Document.addEventListener("DomContentloaded", renderProjectCards);
5
//function for the close button on the modal
function closeModal(){
  const modal = document.getElementById("project_modal");
  if(modal){
    modal.remove()
    window.removeEventListener("click", outsideClick);
}
}

// Object to store about card properties
const aboutCards = [
  {
    image: "./assets/images/Icon Language.svg",
    heading: "Language",
    language:['Javascript', 'Ruby on Reils', 'HTML', 'CSS'],
  },
   {
   image: "./assets/images/Icon Language.svg",
   heading: "Frameworks",
   language:['React.js', 'Ruby on Reils', 'RSpec', 'Capybara', 'Solenium'],
 },
  {
   image: "./assets/images/Icon Language.svg",
   heading: "Skills",
   language:['Database Management', 'Version Controle', 'CLI', 'Web Development', 'API Design'],
 },
 ]

 // function to creat Card
 function createAboutCards(about){
  const cards = document.createElement('div');
  cards.classList.add("about_card");
  const pics = document.createElement("img");
  pics.src = about.image;
  pics.alt = about.heading;
  cards.appendChild(pics);
  const head = document.createComment('h3');
  head.innerHTML = about.heading;
  cards.appendChild(head);
  const lists = document.createElement("ul");
  about.language.forEach(content => {
    const listItems = document.createElement("li");
    listItems.innerHTML = content;
    list.appendChild(listItems);
  })
  cards.appendChild(list);
  return cards;
 }
 // function to render About card
 function renderaboutCards(){
  const abtCard = document.querySelector(".about_cards");
  aboutCards.forEach(about => {
    const aboutCard = createAboutCards(about);
    abtCard.appendChild(aboutCard);
  });
 }
 document.addEventListener("DOMContentLoaded", renderaboutCards);


























