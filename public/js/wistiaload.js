var insertedNodes = [];
var observer = new WebKitMutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        for(var i = 0; i < mutation.addedNodes.length; i++)
            insertedNodes.push(mutation.addedNodes[i]);
    })
});
observer.observe(document, {
    childList: true
});
console.log(insertedNodes);