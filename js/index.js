$.getJSON(
  "https://api.github.com/search/repositories?q=topic:hackclubiter",
  function projects(data) {
    for (let i = 0; i < data.total_count; i++) {
      var text = `
      <div class="card">
      <div class="card-inside">
        <div class="card-leftcontent">
          <img width="64" height="64" src="${data.items[i].owner.avatar_url}" class="card-image">
          <p class="card-p-left">${data.items[i].owner.login}</p>
        </div>
        <div class="card-rightcontent">
          <div class="card-details-right">
            <h1 font-size="4,5" class="card-heading-right">${data.items[i].name}</h1>
          </div>
          <p class="card-p-right">${data.items[i].description}</p>
          <p class="card-p-right">${data.items[i].language} <span class="card-star"> ⭐${data.items[i].stargazers_count}</span></p>
          <a href="${data.items[i].html_url}" target="blank" class="card-a-right"> Check the project </a>
        </div>
      </div>
    </div>
    `;
      $("#mypanel").append(text);
    }
    var count=
    `<p style="color: aliceblue; text-align:center;" id="totalProjects">Total Projects: ${data.total_count} | <a href="#" onClick="window.location.reload();" style="color: aliceblue; text-align:center;">Refresh Page</a> </p>
    
    `;
    $("#totalProjects").append(count);
  }
);
