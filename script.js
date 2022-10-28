
var btn =  document.getElementById('btn-send');
btn.addEventListener('click',function(e) {
	e.preventDefault()
	var name = document.getElementById('name-user').value;
	var email = document.getElementById('user-email').value;
	var subject = document.getElementById('discription-user').value;
	var subject = document.getElementById('discription-user').value;
	var body = 'name: ' + name + '<br/> email:' + email + '<br/> subject' + subject;
	Email.send({
    Host : "smtp.gmail.com",
    Username : "rboss3877@gmail.com",
    Password : "qfxgndtjqmrwjdky",
    To : 'rishiakrishnanscse2021@jerusalemengg.ac.in',
    From : email,
    Subject : subject,
    Body : body
}).then(
  message => alert(message)
);
})