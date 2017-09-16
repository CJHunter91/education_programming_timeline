var AjaxRequest = require('../services/ajax_request');
var IndivLangView = function() {

}

IndivLangView.prototype.render = function(language) {
    var section = document.getElementById('main-view');

    //create elements

    var title = document.createElement('h2');
    var author = document.createElement('h3');
    var desc = document.createElement('p');
    var year = document.createElement('p');
    var usedBy = document.createElement('p');
    var usedFor = document.createElement('p');
    var exCode = document.createElement('p');
    var docs = document.createElement('p');
    var linksList = document.createElement('ul');
    var prosList = document.createElement('ul');
    var consList = document.createElement('ul');
    var popularity = document.createElement('section')
    var proListTitle = document.createElement('h4');

    //adding data
    title.innerText = language[0].language;
    author.innerText = language[0].author;
    desc.innerText = language[0].description;
    year.innerText = language[0].year;
    usedBy.innerText = language[0].usedBy;
    usedFor.innerText = language[0].usedFor;
    exCode.innerText = language[0].exampleCode;
    docs.innerText = language[0].documentation;
    proListTitle.innerText = "Pros:"
    

    //appending tags
    section.appendChild(title);
    section.appendChild(author);
    section.appendChild(desc);
    section.appendChild(year);
    section.appendChild(usedBy);
    section.appendChild(usedFor);
    section.appendChild(linksList);
    section.appendChild(proListTitle);
    proListTitle.appendChild(prosList);
    section.appendChild(consList);
    section.appendChild(popularity);
    console.log(language[0].pros);
    
    language[0].pros.forEach(function(pro){
        var proLi = document.createElement('li');
        proLi.innerText = pro; 
        prosList.appendChild(proLi);
    })
}

module.exports = IndivLangView;

