const list = document.querySelector('#movie-list ul');
const forms = document.forms;

// delete books
list.addEventListener('click',(e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});


const addForm = forms['add-movie'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  // create elements

  const li = document.createElement('li');
  const movieName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add text content
  movieName.textContent = value;
  deleteBtn.textContent = 'delete';

  //add classes
  movieName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append to DOM
  li.appendChild(movieName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
  


});

  //hide books 
  const hideBox =document.querySelector('#hide');
  hideBox.addEventListener('change',function(e){
    if(hideBox.checked){
      list.style.display = "none";
    } else {
      list.style.display = "initial";
    }
  });

  //filter book
  const searchBar = document.forms['search-movies'].querySelector('input');
  searchBar.addEventListener('keyup',function(e){
    const term = e.target.value.toLowerCase();
    const movie = list.getElementsByTagName('li');
    Array.from(movies).forEach(function(movie){
      const title = movie.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(term)!= -1){
        movie.style.display = 'block';
      } else {
        movie.style.display = 'none';
      }
    });
  });
