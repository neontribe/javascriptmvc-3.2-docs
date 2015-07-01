$.View.register({
    suffix: "json",
    script: function( id, text ) {
        var json = JSON.parse(text);
        return "function(){ return " + JSON.stringify(json) + "; }";
    },
    renderer: function( id, text ) {
        var json = JSON.parse(text);
        return function () {
            return json;
        }
    }
});
