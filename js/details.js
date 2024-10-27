import {Ui} from "./ui.js";

export class Details{
    constructor(id) {   
      document.getElementById("btnClose").addEventListener("click", (e) => {
         document.getElementById("details").classList.add("d-none");
         document.getElementById("games").classList.remove("d-none");
      });
      this.loading = document.querySelector(".loader")
      this.getDetails(id);
    }
 
    async getDetails(idGames) {
       this.loading.classList.replace("d-none","d-flex");
    
       const options = {
          method: "GET",
          headers: {
             "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
             "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
       };
      const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options)
      const response = await api.json();
      this.loading.classList.replace("d-flex","d-none");
      new Ui().displayDetails(response)
         //   .catch((err) => console.error(err))
         //   .finally(() => {
         //      loading.classList.add("d-none");
         //   });
      }
 }
 