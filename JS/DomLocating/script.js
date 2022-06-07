
// const title_id = document.getElementById('title');
// const p_class = document.getElementsByClassName('class1');
// const p_query = document.querySelector('.class1');
// const ps_query = document.querySelectorAll('.class1');
// const p_query2 = document.querySelectorAll('body .class1:nth-of-type(1)');

// console.log(title_id );
// console.log(p_class);
// console.log(Array.from(p_class));
// console.log(p_query);
// console.log(ps_query);
// console.log(Array.from(ps_query));
// console.log(p_query2);

const button = document.getElementById('button');

button.addEventListener('mouseover', function(){
  button.style.backgroundColor = 'yellow';
})

button.addEventListener('mouseout', function(){
  button.style.backgroundColor = 'red';
})

button.removeEventListener()