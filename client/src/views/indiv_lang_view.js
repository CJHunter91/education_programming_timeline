var AjaxRequest = require('../services/ajax_request');
var LineChart = require('./lineChart.js')
var _ = require('lodash');
var IndivLangView = function() {

}

IndivLangView.prototype.render = function(language) {
    //set back and forward buttons
    var section = document.getElementById('main-view');
    //removes any elements from main view
    section.innerHTML = '';
    //creating containers for styling
    var descriptionSection = document.createElement('section');
    var proSection = document.createElement('section');
    var consSection = document.createElement('section');
    var proConsSection = document.createElement('section');
    var docLinksection = document.createElement('section');
    var linksSection = document.createElement('section');
    var link = document.createElement('section');

    //create elements
    var id = document.createElement('p');
    var title = document.createElement('h2');
    var author = document.createElement('h4');
    var desc = document.createElement('p');
    var year = document.createElement('p');
    var usedBy = document.createElement('p');
    var usedFor = document.createElement('p');
    var exCode = document.createElement('pre');
    var docsList = document.createElement('ul');
    var linksList = document.createElement('ul');
    var prosList = document.createElement('ul');
    var consList = document.createElement('ul');
    var popularity = document.createElement('section')
    var proListTitle = document.createElement('h4');
    var conListTitle = document.createElement('h4');
    var docListTitle = document.createElement('h4');
    var linksTitle = document.createElement('h4');

    //adding data
    id.innerText = language[0].id;
    id.id = 'language-id';
    id.style.display = 'none';
    title.innerText = language[0].language + " - " + language[0].year;
    author.innerText = "Created by: " + language[0].author;
    desc.innerText = language[0].description;
    // year.innerText = language[0].year;
    usedBy.innerText = "Used by: "+ language[0].usedBy;
    usedFor.innerText = "Used for: "+language[0].usedFor;
    exCode.innerText = language[0].exampleCode;
    proListTitle.innerText = "Pros:";
    conListTitle.innerText = "Cons:";
    docListTitle.innerText = "Documentation:";
    linksTitle.innerText = "Useful Links:";

    popularity.id = "popChart";
    proSection.id = "proSection";
    consSection.id = "consSection";
    docLinksection.id = "docLinksection";
    linksSection.id = "linksSection";
    descriptionSection.id = "descriptionSection";
    exCode.id = "exCode";
    proConsSection.id = "proCons";
    link.id = "links"
    


    

    //appending tags
    section.appendChild(descriptionSection);

    descriptionSection.appendChild(id);
    descriptionSection.appendChild(title);
    descriptionSection.appendChild(author);
    descriptionSection.appendChild(desc);
    descriptionSection.appendChild(usedBy);
    descriptionSection.appendChild(usedFor);

    section.appendChild(exCode);

    proConsSection.appendChild(proSection);
    proConsSection.appendChild(consSection);
    proSection.appendChild(proListTitle);
    consSection.appendChild(conListTitle);

    proListTitle.appendChild(prosList);
    conListTitle.appendChild(consList);

    section.appendChild(proConsSection);
    // proConsSection.appendChild(consList);

    docLinksection.appendChild(docListTitle);
    linksSection.appendChild(linksTitle);

    link.appendChild(docLinksection);
    link.appendChild(linksSection);

    section.appendChild(link);

    
    // section.appendChild(linksSection);
    // section.appendChild(docLinksection);
    
    docListTitle.appendChild(docsList);
    linksTitle.appendChild(linksList);

    section.appendChild(popularity);
    // popularity.appendChild(chart);
    new LineChart(language);

    var linkGenerate = function(list, appendTo){ 
        list.forEach(function(item){
            var listItem = document.createElement('li');
            listItem.innerHTML = `<a href = "${_.values(item)}">${_.keys(item)}</a>`; 
            appendTo.appendChild(listItem);
            
        })
    }

    var listGenerate = function (list, appendTo) {
        list.forEach(function (item) {
            var listItem = document.createElement('li');
            listItem.innerHTML =item;
            appendTo.appendChild(listItem);

        })
    }



    listGenerate(language[0].pros, prosList)
    listGenerate(language[0].cons, consList)
    linkGenerate(language[0].documentation, docsList)
    linkGenerate(language[0].links, linksList)

    
}

// IndivLangView.prototype.listGenerate = function(list, appendTo){ 
//     list.forEach(function(item){
//         var listItem = document.createElement('li');
//         listItem.innerText = item; 
//         appendTo.appendChild(listItem);
//     })
// }

//side button for main container
IndivLangView.prototype.sideButton = function(){

    var container = document.getElementsByClassName('container');

    var leftButton = document.createElement('button');
    var rightButton = document.createElement('button');

    container.appendChild(leftButton);
    container.appendChild(rightButton);
}


module.exports = IndivLangView;

