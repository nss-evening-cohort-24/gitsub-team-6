const repos = [ 
  {
    id: 1,
    name: "Sorting Hat",
    description: "A hat that sorts",
    isPinned: true,
    starNum: 15,
    branchNum: 5,
    lastUpdated: 3082023,
    issueNum: 15
  },
]
 
// {
//   id: 1,
//   name: 
//   description: 
//   isPinned:
//   starNum:
//   branchNum:
//   lastUpdated:
//   issueNum:
// },
// {
//   id: 1,
//   name: 
//   description: 
//   isPinned:
//   starNum:
//   branchNum:
//   lastUpdated:
//   issueNum:
// },
// {
//   id: 1,
//   name: 
//   description: 
//   isPinned:
//   starNum:
//   branchNum:
//   lastUpdated:
//   issueNum:
// },
// {
//   id: 1,
//   name: 
//   description: 
//   isPinned:
//   starTotal:
//   branchNum:
//   updated:
//   issueNum:
// },
// ]

// const packages = [
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
//   {
//     id: 1,
//     name:
//     description:
//     learnMore:
//   },
// ]

// const projects = [
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
//   {
//     id: 1,
//     name:
//     updated:
//     description:
//   },
// ]

// const pinnedRepos = [
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
  const targetedId = document.querySelector(divId)
  targetedId.innerHTML = htmlToRender
}


const cardsOnDom = (array) => {
  let domString = ''
  for(const item of array) {
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
  renderToDom("#card-container", domString);
};

cardsOnDom(repos);
