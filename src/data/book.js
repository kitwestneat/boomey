const pageList = [{
  name: 'start',
  title: 'Welcome!',
  description: 'Welcome to Boogey!',
  choices: [ 'lets-go' ],
}, {
  name: 'lets-go',
  title: "Let's go!",
  description: "This is a good game so far!",
  choices: []
}];

function buildBook() {
  let pagesByTitle = {};

  pageList.forEach(page => pagesByTitle[page.name] = page);

  pageList.forEach(page =>
    pagesByTitle[page.name].choices = pagesByTitle[page.name].choices.map(choiceName => pagesByTitle[choiceName])
  ); 

  return pagesByTitle;
}

export default buildBook();
