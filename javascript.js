var list = document.querySelector('#myList');

//  code for deleting the list
list.addEventListener('click', function(e){
    if(e.target.className === 'delete'){    // We want to get where did the click happened, so className
        // console.log(e.target);
        var li = e.target.parentElement;    // this is the li which is the parent to the delete and we want to delete it.
        // console.log(li);
        //li.parentNode.removeChild();
        list.removeChild(li);
    }
});

// code for hiding the list

var hide = document.getElementById('hide');
hide.addEventListener('click', function(e){
    if(hide.checked == true){
        list.hidden = true;
    }else if(hide.checked == false){
        list.hidden = false;
    }
});

// code for adding a movie list

var form = document.forms['add-movie'];
form.addEventListener('submit', function(e){

    e.preventDefault();
    
    var vall = form.querySelector('input[type="text"]').value;
    
    var li = document.createElement('li');
    
    var muvi = document.createElement('span');
    
    var del = document.createElement('span');
    
    li.appendChild(muvi);
    li.appendChild(del);
    list.appendChild(li);
    
    muvi.textContent = vall;
    del.textContent = 'delete';
    
    muvi.classList.add('name');
    del.classList.add('delete');
});

// alternate method to add movie list..

/*function add(){
    var ul = document.getElementById("myList");
    var t = document.getElementById("moviesname").value;
    var li = document.createElement("li");
    var span = document.createElement("span");
    var span1 = document.createElement("span");
    span.appendChild(document.createTextNode(t));
    span1.appendChild(document.createTextNode("delete"));
    span.setAttribute("class","name");
    span1.setAttribute("class","delete");
    li.appendChild(span);
    li.appendChild(span1);
    li.setAttribute("class","list");
    ul.appendChild(li);
}*/

// code for searching movie name

var searchMovie = document.querySelector('input[type="text"]');

searchMovie.addEventListener('keyup', function(e){
    var fltr = searchMovie.value.toLowerCase();
    var list = document.querySelector('#movie-list ul');
    var fullLi = list.querySelectorAll('li');
    var li = list.querySelectorAll('li .name');
    for(i = 0; i < li.length; i++){
        var a = li[i].textContent;
        var txtValue = a.toLowerCase();
        if(txtValue.indexOf(fltr) > -1){
            fullLi[i].style.display = "";
        } else{
            fullLi[i].style.display = "none";
        }
    }
});