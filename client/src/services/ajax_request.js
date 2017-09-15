var AjaxRequest = function(url){
    this.url = url;
    this.languages = [];
}

AjaxRequest.prototype.get = function(language, callback){
    var request = new XMLHttpRequest();
    request.open('GET', this.url);
    request.onload = function(){
        if (request.status === 200){
            var jsonString = request.responseText;
            this.languages = JSON.parse(jsonString);
            callback(this.languages);
            console.log(this.languages)
            
        }
    }.bind(this);
    request.send();
}

module.exports = AjaxRequest;