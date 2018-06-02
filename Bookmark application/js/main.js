document.getElementById('my_form').addEventListener('submit', save_bookmark);

function save_bookmark(e){
    var site_name = document.getElementById('site_name').value;
    var site_url = document.getElementById('site_url').value;

    if(!validate_form(site_name,site_url)){
        return false;
    }
    
    var bookmark = {
        name: site_name,
        url: site_url,
    }

    // Adding data to Chrome's local storage to save the bookmarks that we add
    if(localStorage.getItem('bookmarks')=== null){
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
    else{
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }

    // clear form after submitting
    document.getElementById('my_form').reset();

    // need to refetch bookmarks as this will refresh this bookmarks div
    fetch_bookmarks();

    // Prevents form from submitting
    e.preventDefault();
}

// display the bookmarks
function fetch_bookmarks(){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // get output id
    var bookmarks_results = document.getElementById('bookmark_results');

    // build the div that contains this data
    bookmarks_results.innerHTML = '';
    for(var i = 0; i <bookmarks.length; i++){
        var site = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarks_results.innerHTML += '<div class="card card-body bg-light">'+
                                            '<h3>'+site+
                                            '<a class="btn btn-light" target="_blank" role="button" href="'+url+'"> Visit</a>'+
' <a onclick="delete_bookmark(\''+url+'\')" class="btn btn-danger" role="button" href="#"> Delete</a>'
                                            '</h3>'+
                                            '</div>';
    }
}

// Delete bookmark
function delete_bookmark(url){
    console.log(url);
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for(var i=0; i<bookmarks.length; i++){
        if(bookmarks[i].url == url){
            bookmarks.splice(i,1);
        }
    }

    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

    // need to refetch bookmarks as this will refresh this bookmarks div
    fetch_bookmarks();
}

function validate_form(site_name, site_url){

    if(!site_name || !site_url){
        alert('Pls fill in the form');
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!site_url.match(regex)) {
        alert('Pls use a valid url');
        return false;
    }

    return true;
}