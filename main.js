const repos = [ 
  {
    id: 1,
    name: "Sorting Hat",
    description: "A hat that sorts",
    isPinned: true,
    starNum: 15,
    branchNum: 5,
    lastUpdated: 3082023,
    issueNum: 10,
  },

  {
    id: 2,
    name: "Sorting Hat",
    description: "A hat that sorts",
    isPinned: true,
    starNum: 15,
    branchNum: 5,
    lastUpdated: 3082023,
    issueNum: 10,
  },
]


//   {
//     id: 1,
//     name: 
//     description: 
//     isPinned:
//     starNum:
//     branchNum:
//     lastUpdated:
//     issueNum:
//   },
//   {
//     id: 1,
//     name: 
//     description: 
//     isPinned:
//     starNum:
//     branchNum:
//     lastUpdated:
//     issueNum:
//   },
//   {
//     id: 1,
//     name: 
//     description: 
//     isPinned:
//     starNum:
//     branchNum:
//     lastUpdated:
//     issueNum:
//   },
//   {
//     id: 1,
//     name: 
//     description: 
//     isPinned:
//     starTotal:
//     branchNum:
//     updated:
//     issueNum:
//   },
// ]

const packages = [
  {
    id: 1,
    name: "borg",
    description: "blurb",
    learnMore: "sho",
  },
]
//   {
//     id: 1,
//     name:
//     description:
//     learnMore:
//   },
//   {
//     id: 1,
//     name:
//     description:
//     learnMore:
//   },
//   {
//     id: 1,
//     name:
//     description:
//     learnMore:
//   },
//   {
//     id: 1,
//     name:
//     description:
//     learnMore:
//   },
//   {
//     id: 1,
//     name:
//     description:
//     learnMore:
//   },
// ]

const projects = [
  {
    id: 1,
    name: "doo",
    updated: "sjs",
    description: "shj"
  },
]
//   {
//     id: 1,
//     name:
//     updated:
//     description:
//   },
//   {
//     id: 1,
//     name:
//     updated:
//     description:
//   },
//   {
//     id: 1,
//     name:
//     updated:
//     description:
//   },
//   {
//     id: 1,
//     name:
//     updated:
//     description:
//   },
// ]

const pinnedRepos = [
  {
    id: 1,
    name: "fhdsfj",
    description: "hdsu",
    language: "dshjf",
    starred: "fdhs",
    branchNum: 3
  },
]
//   {
//     id: 1,
//     name:
//     description:
//     language:
//     starred:
//     branchNum:
//   },
//   {
//     id: 1,
//     name:
//     description:
//     language:
//     starred:
//     branchNum:
//   },
//   {
//     id: 1,
//     name:
//     description:
//     language:
//     starred:
//     branchNum:
//   },
// ]

// utility function

const renderToDom = (divId, htmlToRender) => {
  const targetedId = document.querySelector(divId);
  targetedId.innerHTML = htmlToRender;
  console.log(divId)
};

// const cardsOnDom = () => {


const reposOnDom = (repos) => {
  let domString = ''
  for (const repo of repos) {
    domString += `
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
  }
  renderToDom("#repos-container", domString);
};

reposOnDom(repos);

const projectsOnDom = (projects) => {
  let domString = ''
  for(const project of projects) {
    domString += `
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
  }
  renderToDom("#projects-container", domString);
};

// projectsOnDom(projects);

const packagesOnDom = (packages) => {
  let domString = ''
  for(const package of packages) {
    domString += `
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
  }
  renderToDom("#packages-container", domString);
};

packagesOnDom(packages);

const pinsOnDom = (pinnedRepos) => {
  let domString = ''
  for(const pinnedRepo of pinnedRepos) {
    domString += `
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
  }
  renderToDom("#pins-container", domString);
};

pinsOnDom(pinnedRepos);

//event listeners


