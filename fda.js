const getJson = function(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        const status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
}

getJson('https://www.fda.gov/files/api/datatables/static/search-for-guidance.json', 
    function(err, data) {
        if(err !== null) {
            alert('error', err);
        } else {
            alert('got data', data)
        }
    }
);

