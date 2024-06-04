function mailTo(address) {
  return '<a href="mailto:' + address + '">' + address + '</a>';
}


function setEmail() {
  // try to prevent spam without annoying users...
  var user = '\u0078\u006A\u007A\u0068\u0061\u006F';  // xjzhao
  var domain = '\u0040\u006E\u0074\u0075\u002E\u0065\u0064\u0075\u002E\u0073\u0067';  // @ntu.edu.sg
  $('.my-email').html(mailTo(user + domain));
}
// Copy the "function setEmail(){}" to the chatgpt, and use prompt: Please generate the mailbox code for this email: xxx@xx.xx, and replace the code here

function toggleAbstract(key) {
  $('.pub-abstract.'+key).slideToggle();
}
