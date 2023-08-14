const repos = [
  {
    id: 1,
    name: "Sorting Hat",
    description: "A hat that sorts",
    isPinned: true,
    starNum: 15,
    branchNum: 5,
    lastUpdated: "20 days ago",
    issueNum: 10,
  },

  {
    id: 2,
    name: "Pet Adoption",
    description: "Lists available pets for adoption",
    isPinned: true,
    starNum: 23,
    branchNum: 2,
    lastUpdated: "40 days ago",
    issueNum: 9,
  },

  {
    id: 3,
    name: "HTML Resume",
    description: "Displays accomplishments for future employers",
    isPinned: true,
    starNum: 100,
    branchNum: 4,
    lastUpdated: "50 days ago",
    issueNum: 4,
  },

  {
    id: 4,
    name: "Product Cards",
    description: "Lists products for purchase",
    isPinned: true,
    starNum: 443,
    branchNum: 6,
    lastUpdated: "60 days ago",
    issueNum: 6,
  },

  {
    id: 5,
    name: "YouTube Player",
    description: "A YouTube copycat app",
    isPinned: true,
    starNum: 11,
    branchNum: 11,
    lastUpdated: "2 days ago",
    issueNum: 11,
  },
];

const packages = [
  {
    id: 1,
    imageUrl:
      "https://cdn2.iconfinder.com/data/icons/leto-blue-big-data/64/big_data_olap_array_multidimentional_volume-64.png",
    name: "Docker",
    description:
      "A software platform used for building applications based on catainers - small and lightweight execution environments.",
    learnMore: "https://www.docker.com",
  },

  {
    id: 2,
    imageUrl:
      "https://cdn1.iconfinder.com/data/icons/leto-design-creativity/64/__logo_symbol_wordmark-64.png",
    name: "Apache Maven",
    description:
      "A default package manager used for the java programming language and the Java runtime environment.",
    learnMore: "https://maven.apache.org/",
  },

  {
    id: 3,
    imageUrl:
      "https://cdn2.iconfinder.com/data/icons/leto-blue-big-data/64/big_data_cdn_content_delivery_network_layers-64.png",
    name: "Nuget",
    description:
      "A free and open source package manager used for the Microsoft development platforms including .NET.",
    learnMore: "https://www.nuget.org/",
  },

  {
    id: 4,
    imageUrl:
      "https://cdn1.iconfinder.com/data/icons/space-travel-flat/340/space_astronomy_system_planet_universe_galaxy_star_neptune-64.png",
    name: "RubyGems",
    description:
      "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.",
    learnMore: "https://rubygems.org/",
  },

  {
    id: 5,
    imageUrl:
      "https://cdn1.iconfinder.com/data/icons/space-travel-flat/340/space_astronomy_universe_galaxy_star_cosmos_planet_science_astrology-64.png",
    name: "npm",
    description:
      "A package manager for JavaScript, including with Node.js. npm makes it easy for developers to share and reuse code.",
    learnMore: "https://www.npmjs.com/",
  },

  {
    id: 6,
    imageUrl:
      "https://cdn1.iconfinder.com/data/icons/space-travel-flat/340/space_astronomy_system_planet_universe_galaxy_star_jupiter-64.png",
    name: "Containers",
    description:
      "A single place for your team to manage Docker images and decide who can see and access your images.",
    learnMore: "https://www.solarwinds.com/resources/it-glossary/container",
  },
];

const projects = [
  {
    id: 1,
    name: "Lorem Ipsum",
    updated: "Updated 23 seconds ago",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    contributors: ["cnfairall", "Bonni535"],
  },

  {
    id: 2,
    name: "Dangle Autem",
    updated: "Updated 1 hour ago",
    description:
      "Illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    contributors: ["cnfairall", "GitEbachS"],
  },

  {
    id: 3,
    name: "Bleegle Ramoon",
    updated: "Updated 14 days ago",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    contributors: ["JohnnySaniat", "JSPICELA"],
  },

  {
    id: 4,
    name: "Glaflarbo",
    updated: "Updated 44 minutes ago",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },

  {
    id: 5,
    name: "Praesent Gravida",
    updated: "Updated 3 months ago",
    description: "Proin finibus placerat urna ac dignissim.",
    contributors: ["JohnnySaniat", "Bonni535", "GitEbachS", "JSPICELA"],
  },
];

const pinnedRepos = [
  {
    id: 1,
    name: "heelys-stock-calculator",
    description: "An app that pulls the local heelys stock",
    language: "JavaScript",
    starred: 400,
    branchNum: 7,
  },

  {
    id: 2,
    name: "nss-lrem ipsum-generator",
    description:
      "a lorm ipsum generaator with full stack words and terms from the curriculum",
    language: "JavaScript",
    starred: 37,
    branchNum: 12,
  },

  {
    id: 3,
    name: "httriri",
    description: "HTTRiRi - HTTP Status Codes as Portrayed by Rihanna GIFs",
    language: "TypeScript",
    starred: 27,
    branchNum: 11,
  },

  {
    id: 4,
    name: "httrobinson",
    description:
      "HTTRiRi - HTTP Status Codes as Portrayed by Tim Robinson GIFs",
    language: "TypeScript",
    starred: 2,
    branchNum: 32,
  },

  {
    id: 5,
    name: "ambition-fund-website",
    description:
      "Website for www.ambitionfund.org, micro-grant program to provide support for underrepresented people who need financial assistance pursuing professional development opportunities in technology...",
    language: "Javascript",
    starred: 7,
    branchNum: 99,
  },
];

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
      projectsOnDom();
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
  let domString = "";
  for (const repo of array) {
    domString += `
    <div class="card" id=${repo.id} style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${repo.name}</h5>
    <p class="card-text">${repo.description}</p>
      <div class='repoWrap'>
        <div class='flexContainer'>
          <div "id="fav-btn"> <input type="checkbox"></div> 
              <p class="card-text numPad" >${repo.starNum}</p>
          </div>
          <div>
            <p class="card-text">${
              repo.branchNum
                ? `<i class="fas fa-code-branch" id="branch-btn"></i> ${repo.branchNum}`
                : ""
            }</p>
          </div>
          <p class="card-text ">${repo.lastUpdated}</p>
        </div>
      </div>
    <p class="card-text issues">${repo.issueNum} issues need help</p>
  </div>
</div>`;
  }
  renderToDom("#repos-container", domString);
};

const packagesOnDom = (array) => {
  let domString = "";
  for (const item of array) {
    domString += `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title" ><img src="${item.imageUrl}" class="card-img-top pack-img" alt="...">${item.name}</h5>
    <p class="card-text">${item.description}</p>
    <a href="${item.learnMore}" target="_blank" class="btn btn-secondary">Learn More</a>
    <a href="#" class="btn btn-secondary" id='delete--${item.id}'>Delete</a>
  </div>
  </div>
`;
  }
  renderToDom("#packages-container", domString);
};

const pinsOnDom = (array) => {
  let domString = "";
  for (const pinnedRepo of array) {
    domString += `
    <div class="card" style="width: 18rem;">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-display" viewBox="0 0 16 16">
    <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"/>
  </svg>
  <div class="card-body">
    <h5 class="card-title">${pinnedRepo.name}</h5>
    <p class="card-text">${pinnedRepo.description}</p>
    <p class="card-text">${pinnedRepo.language}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" id="fav-btn" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
  <p>${pinnedRepo.starred}</p>
</svg>
<i class="fas fa-code-branch" id="branch-btn"> 
<p> ${pinnedRepo.branchNum} </p> 
</i>
  </div>
</div>`;
  }
  renderToDom("#pins-container", domString);
};

const tableRow = (array) => {
  let domString = "";
  for (const item of array) {
    domString += `
    <tr>
      <td>${item.name}</td>
      <td>${item.updated}</td>
      <td>${item.description}</td>
      <td>${item.contributors}</td>
    </tr>
  `;
  }
  return domString;
};

const projectsOnDom = () => {
  let table = "";
  table += `
<table class="table table-dark table-striped" style="width: 600px">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Updated</th>
      <th scope="col">Description</th>
      <th scope="col">Contributors</th>

    </tr>
  </thead>
  <tbody>
  ${tableRow(projects)}
</tbody>
</table>
`;

  if (document.body.id === "proj") {
    renderToDom("#projects-container", table);
  }
};
// Toggle star button
// const toggleFavorite = (event) => {
//   if (event.target.id.includes("fav-btn")) {
//     const [, id] = event.target.id.split("--");

//     const index = referenceList.findIndex(taco => taco.id === Number(id))

//     pinnedRepos.favorite = !pinnedRepos.favorite
//     pinsOnDom(pinnedRepos);
//   }};

// EVENT LISTENERS
const eventListeners = () => {
  const repoSearchButton = document.getElementById("search-button-2");
  const repoSearchInput = document.getElementById("search-input-2");

  if (repoSearchButton != null) {
    repoSearchButton.addEventListener("click", () => {
      const inputValue = repoSearchInput.value;
      let repoSearchArray = [];
      for (const iterator of repos) {
        if (iterator.name.toLowerCase() === inputValue.toLowerCase()) {
          repoSearchArray.push(iterator);
          reposOnDom(repoSearchArray);
          const repoDiv = document.querySelector("#repos-container");
          repoDiv.innerHTML = `<div class="card" id=${
            iterator.id
          } style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${iterator.name}</h5>
          <p class="card-text">${iterator.description}</p>
          <div class='flexContainer'>
          <p class="card-text repoAtt">${
            iterator.starNum
              ? `<i class="fa-regular fa-star" style="color: #353626;"></i> ${iterator.starNum}`
              : ""
          }</p>
          <p class="card-text repoAtt">${
            iterator.branchNum
              ? `<i class="fas fa-code-branch" id="branch-btn"></i> ${iterator.branchNum}`
              : ""
          }</p>
          <p class="card-text repoAtt">${iterator.lastUpdated}</p>
          </div>
          <p class="card-text">${iterator.issueNum} issues need help</p>
        </div>
      </div>`;
        }
      }
      repoSearchButton.addEventListener("click", () => {
        // Reset the value of the input field
        repoSearchInput.value = "";
      });
    });
  }

  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-input");
  if (searchButton != null) {
    searchButton.addEventListener("click", () => {
      const inputValue = searchInput.value;
      let searchArray = [];
      for (const iterator of projects) {
        if (iterator.name.toLowerCase() === inputValue.toLowerCase()) {
          searchArray.push(iterator);
          tableRow(searchArray);
          projectsOnDom(searchArray);
          const projectDiv = document.querySelector("#projects-container");
          projectDiv.innerHTML = `<table class="table table-dark table-striped" style="width: 600px">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Updated</th>
          <th scope="col">Description</th>
          <th scope="col">Contributors</th>
    
        </tr>
      </thead>
      <tbody>
      ${tableRow(searchArray)}
    </tbody>
    </table>`;
        }
      }
    });
    searchButton.addEventListener("click", () => {
      // Reset the value of the input field
      searchInput.value = "";
    });
  }

  let forms = document.querySelectorAll("form");
  // **Packages Form Submit**

  const packageSubmit = (e) => {
    e.preventDefault();

    const packageObj = {
      id: packages.length + 1,
      name: document.querySelector("#name").value,
      description: document.querySelector("#description").value,
    };
    packageObj.imageUrl =
      "https://cdn2.iconfinder.com/data/icons/leto-blue-big-data/64/big_data-10-512.png";
    packages.push(packageObj);
    packagesOnDom(packages);
    forms.reset;
  };

  forms.forEach((item) => {
    item.addEventListener("submit", packageSubmit);
  });

  // **Repos Form Submit**
  const repoSubmit = (e) => {
    e.preventDefault();

    const repoObj = {
      id: repos.length + 1,
      name: document.querySelector("#name").value,
      description: document.querySelector("#description").value,
      isPinned: true,
      starNum: "45",
      branchNum: "3",
      lastUpdated: "45 seconds ago",
      issueNum: "0 issues need help",
    };

    repos.push(repoObj);
    reposOnDom(repos);
    forms.reset;
  };
  forms.forEach((item) => {
    item.addEventListener("submit", repoSubmit);
  });

  // **Pins Form Submit**
  const pinSubmit = (e) => {
    e.preventDefault();

    const pinObj = {
      id: pinnedRepos.length + 1,
      name: document.querySelector("#name").value,
      description: document.querySelector("#description").value,
      language: document.querySelector("#language").value,
      branchNum: '3'
    };
    pinnedRepos.push(pinObj);
    pinsOnDom(pinnedRepos);
    forms.reset;
  };

  forms.forEach((item) => {
    item.addEventListener("submit", pinSubmit);
  });

  // **Projects Form Submit**
  const projectSubmit = (e) => {
    e.preventDefault();

    const projectObj = {
      id: projects.length + 1,
      name: document.querySelector("#name").value,
      description: document.querySelector("#description").value,
      contributors: document.querySelector("#contributors").value,
      updated: "Updated 0 seconds ago",
    };
    projects.push(projectObj);
    projectsOnDom(projects);
    forms.reset;
  };

  forms.forEach((item) => {
    item.addEventListener("submit", projectSubmit);
  });

  const removePackage = document.querySelector("#packages-container");
  removePackage.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.id.includes("delete")) {
      const [, id] = e.target.id.split("--");
      const index = packages.findIndex((package) => package.id === Number(id));
      packages.splice(index, 1);
      packagesOnDom(packages);
    }
  });

};



const startApp = () => {
  getData();
  eventListeners();
};

startApp();
