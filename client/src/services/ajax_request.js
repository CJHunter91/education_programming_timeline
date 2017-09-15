var AjaxRequest = function(url){
    this.url = url;
    this.language = [];
}

AjaxRequest.prototype.get = function(language, callback){
    var request = new XMLHttpRequest();
    request.open('GET', this.url);
    request.onload = function(){
        if (request.status === 200){
            var jsonString = request.responseText;
            this.language = JSON.parse(jsonString);
            callback(this.language);
        }
    }.bind(this);
    request.send();
}

module.exports = AjaxRequest;