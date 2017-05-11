//show 1st 10 students at page start with no active pagiantion link buttons

function startPage(){
  let students = document.getElementsByClassName("student-item cf");
  for (let i = 10; i < students.length; i++)
    {
      students[i].style.display = "none";
    }
}

startPage();

//function to show 10 students based on pagination link passing in page value

function showPage(page){
  console.log(page);
  let students = document.getElementsByClassName("student-item cf");
  let maxPage = page * 10;
  let minPage = maxPage - 10;

  for (let i = 0; i < students.length; i++) {
      students[i].style.display = "none";
    }

  for (let i = minPage; i < maxPage; i++) {
      students[i].style.display = "block";

    }
}


//dynamic creation of pagination links using Math.ceil to add remaining link

let numbers = document.getElementsByClassName('student-item cf').length/10;
numbers = Math.ceil(numbers);


for (var i = 1; i <= numbers; i++) {
  $('<a />', {
        href: '#',
        text: [i],
        onClick: 'showPage(' + i + ')'

    }).wrap('<li />').parent().appendTo('.pagination');
}

//add and remove active class resulting from click event

$(function() {
  $('.pagination li a').click(function (e) {
    e.preventDefault();
    $('.pagination li a').removeClass('active');
    $(this).addClass('active');
  })
});
