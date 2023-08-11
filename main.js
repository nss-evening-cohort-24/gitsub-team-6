const repos = [ 

  {
    id: 1,
    name: "Sorting Hat",
    description: "A hat that sorts",
    isPinned: true,
    starNum: 15,
    branchNum: 5,
    lastUpdated: 3082023,
    issueNum: 10
  },

  {
    id: 2,
    name: "Pet Adoption",
    description: "Lists available pets for adoption",
    isPinned: true,
    starNum: 23,
    branchNum: 2,
    lastUpdated: 3082023,
    issueNum: 9
  },
  
  {
    id: 3,
    name: "HTML Resume",
    description: "Displays accomplishments for future employers",
    isPinned: true,
    starNum: 100,
    branchNum: 4,
    lastUpdated: 3082023,
    issueNum: 4
  },
  
  {
    id: 4,
    name: "Product Cards",
    description: "Lists products for purchase",
    isPinned: true,
    starNum: 443,
    branchNum: 6,
    lastUpdated: 3082023,
    issueNum: 6
  },

  {
    id: 5,
    name: "YouTube Player",
    description: "A YouTube copycat app",
    isPinned: true,
    starNum: 11,
    branchNum: 11,
    lastUpdated: 3082023,
    issueNum: 11
  }
]

const packages = [

  {
    id: 1,
    imageUrl: 'https://cdn2.iconfinder.com/data/icons/leto-blue-big-data/64/big_data_olap_array_multidimentional_volume-64.png',
    name: "Docker",
    description: "A software platform used for building applications based on catainers - small and lightweight execution environments.",
    learnMore: "https://www.docker.com"
  },

  {
    id: 2,
    imageUrl: 'https://cdn1.iconfinder.com/data/icons/leto-design-creativity/64/__logo_symbol_wordmark-64.png',
    name: "Apache Maven",
    description: "A default package manager used for the java programming language and the Java runtime environment.",
    learnMore: "https://www.docker.com"
  },

  {
    id: 3,
    imageUrl: 'https://cdn2.iconfinder.com/data/icons/leto-blue-big-data/64/big_data_cdn_content_delivery_network_layers-64.png',
    name: "Nuget",
    description: "A free and open source package manager used for the Microsoft development platforms including .NET.",
    learnMore: "https://www.docker.com"
  },

  {
    id: 4,
    imageUrl: 'https://cdn1.iconfinder.com/data/icons/space-travel-flat/340/space_astronomy_system_planet_universe_galaxy_star_neptune-64.png',
    name: "RubyGems",
    description: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.",
    learnMore: "https://www.docker.com"
  },
  
  {
    id: 5,
    imageUrl: 'https://cdn1.iconfinder.com/data/icons/space-travel-flat/340/space_astronomy_universe_galaxy_star_cosmos_planet_science_astrology-64.png',
    name: "npm",
    description: "A package manager for JavaScript, including with Node.js. npm makes it easy for developers to share and reuse code.",
    learnMore: "https://www.docker.com"
  },

  {
    id: 6,
    imageUrl: 'https://cdn1.iconfinder.com/data/icons/space-travel-flat/340/space_astronomy_system_planet_universe_galaxy_star_jupiter-64.png',
    name: "Containers",
    description: "A single place for your team to manage Docker images and decide who can see and access your images.",
    learnMore: "https://www.docker.com"
  }

];

const projects = [

  {
    id: 1,
    name: "Lorem Ipsum",
    updated: "Updated 23 seconds ago",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
  },

  {
    id: 2,
    name: "Dangle Autem",
    updated: "Updated 1 hour ago",
    description: "Illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
  },

  {
    id: 3,
    name: "Bleegle Ramoon",
    updated: "Updated 14 days ago",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
  },

  {
    id: 4,
    name: "Glaflarbo",
    updated: "Updated 44 minutes ago",
    description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
  },

  {
    id: 5,
    name: "Praesent Gravida",
    updated: "Updated 3 months ago",
    description: "Proin finibus placerat urna ac dignissim."
  }
]

const pinnedRepos = [
  {
    id: 1,
    name: "heelys-stock-calculator",
    description: "An app that pulls the local heelys stock",
    language: "JavaScript",
    starred: 400,
    branchNum: 7
  },

  {
    id: 2,
    name: "nss-lrem ipsum-generator",
    description: "a lorm ipsum generaator with full stack words and terms from the curriculum",
    language: "JavaScript",
    starred: 37,
    branchNum: 12
  },

  {
    id: 3,
    name: "httriri",
    description: "HTTRiRi - HTTP Status Codes as Portrayed by Rihanna GIFs",
    language: "TypeScript",
    starred: 27,
    branchNum: 11
  },

  {
    id: 4,
    name: "httrobinson",
    description: "HTTRiRi - HTTP Status Codes as Portrayed by Tim Robinson GIFs",
    language: "TypeScript",
    starred: 2,
    branchNum: 32
  },

  {
    id: 5,
    name: "ambition-fund-website",
    description: "Website for www.ambitionfund.org, micro-grant program to provide support for underrepresented people who need financial assistance pursuing professional development opportunities in technology...",
    language: "Javascript",
    starred: 7,
    branchNum: 99
  }
];

// utility function

const getData = () => {
  let page = document.body.id;
  switch (page) {
    case "main":
      pinsOnDom(pinnedRepos);
      break;
    case "pack":
      packagesOnDom(packages);
      break;
    case "proj":
      projectsOnDom(projects);
      break;
    case "repo":
      reposOnDom(repos);
      break;
  }
};

const renderToDom = (divId, htmlToRender) => {
  const targetedId = document.querySelector(divId);
  targetedId.innerHTML = htmlToRender;
};



const reposOnDom = (array) => {
  let domString = ''
  for (const repo of array) {
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



const projectsOnDom = (array) => {
  let domString = ''
  for(const project of array) {
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

const packagesOnDom = (array) => {
  let domString = ''
  for (const item of array) {
    domString += `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title" ><img src="${item.imageUrl}" class="card-img-top pack-img" alt="...">${item.name}</h5>
    <p class="card-text">${item.description}</p>
    <a href="${item.learnMore}" target="_blank">Learn More</a>
    <a href="#" class="btn btn-primary" id='delete--${item.id}'>Delete</a>
  </div>
  </div>
`
}
renderToDom("#packages-container", domString);
};



const pinsOnDom = (array) => {
  let domString = ''
  for(const pinnedRepo of array) {
    domString += `
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${pinnedRepo.name}</h5>
    <p class="card-text">${pinnedRepo.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
  }
  renderToDom("#pins-container", domString);
};



const startApp = () => {
  getData();
};

startApp();
