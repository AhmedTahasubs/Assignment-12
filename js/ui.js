export class Ui{
   constructor(){} 
    displayGames(arr){
        let gamesCards = ``
        for(let i=0;i<arr.length;i++)
        {
            gamesCards += `<div class="col">
                    <div class="card h-100 bg-transparent text-white" role="button" data-id="${arr[i].id}">
                   <div  class="card-body">
                      <figure class="position-relative">
                         <img class="card-img-top object-fit-cover h-100" src="${arr[i].thumbnail}" />
                      </figure>
                      <figcaption>
                         <div class="hstack justify-content-between">
                            <h3 class="small ">${arr[i].title}</h3>
                            <span class="badge text-bg-primary p-2">Free</span>
                         </div>
                         <p class="card-text small text-center opacity-50">
                          ${arr[i].short_description.split(" ", 8)}
                         </p>
                      </figcaption>
                   </div>
                   <footer class="card-footer small hstack justify-content-between">
                      <span class="badge badge-color">${arr[i].genre}</span>
                      <span class="badge badge-color">${arr[i].platform}</span>
                   </footer>
                </div>
                </div>`
        }
        document.getElementById("cards").innerHTML = gamesCards;
    }

    displayDetails(str){
        const gamePage = `<div class="col-md-4">
                        <img src="${str.thumbnail}" class="w-100" alt="image details">
                        </div>
                        <div class="col-md-8">
                            <h3>Title: ${str.title}</h3>
                            <p>Category: <span class="badge text-bg-info"> ${str.genre}</span> </p>
                            <p>Platform: <span class="badge text-bg-info"> ${str.platform}</span> </p>
                            <p>Status: <span class="badge text-bg-info"> ${str.status}</span> </p>
                            <p class="small">${str.description}</p>
                            <a class="btn btn-outline-warning" target="_blank" href="${str.game_url}">Show Game</a>
                        </div>`;
        document.getElementById("detailsContent").innerHTML= gamePage
    }
}




