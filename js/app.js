baguetteBox.run('.gallery');
const search = document.querySelector('#search');

//Code Snippet from
//https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/

function search_photos() { 
    let input = document.getElementById('searchbar').value 
    input = input.toLowerCase(); 
    let img = document.getElementsByClassName('photos'); 
      
    for (i = 0; i < img.length; i++) {  
        if (!img[i].innerHTML.toLowerCase().includes(input)) { 
            img[i].style.display="none"; 
        } 
        else { 
            img[i].style.display="list-item";                  
        } 
    } 
} 
