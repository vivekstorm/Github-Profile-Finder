$(document).ready(function(){
  $('#searchUser').on('keyup',function(e){
    let username=e.target.value;

    $.ajax({
      url:'https://api.github.com/users/'+username,
      data:{
        client_id:'4b5603b72b3b95b1a021',
        client_secret:'170ec4f130f0b319c560e92283778ae0421dd759'
      }
    }).done(function(user){
      $('#profile').html(`
        <div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">${user.name}</h3>
  </div>
  <div class="panel-body">
    <div class="row">
    <div class="col-md-6">
<img class="thumbnail" src="${user.avatar_url}">
<a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
  </div>
  <div class="col-md-6">
  <span class="label label-default">Repos:${user.public_repos}</span>
<span class="label label-primary">Gists:${user.public_gists}</span>
<span class="label label-success">Followers:${user.followers}</span>
<span class="label label-info">Following:${user.following}</span>
<br>
<br>
  </div>
  </div>
  </div>
</div>`);
    });
  });
});
