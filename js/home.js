import { Details } from "./details.js";
import { Ui } from "./ui.js";

export class Home{
    constructor(){
        document.querySelectorAll(".nav-link").forEach((link)=>{link.addEventListener("click",()=> {
            this.changeLink(link);
            const category = link.dataset.category;
            this.getGames(category)
        });
    });
        this.loading = document.querySelector(".loader")
        this.details = document.getElementById("details")
        this.games = document.getElementById("games")
        this.ui= new Ui();
        this.getGames("mmorpg")
    };
    changeLink(link){
        document.querySelector(".navbar-nav .active").classList.remove("active");
        link.classList.add("active")
        // const categoryData = await this.getGames(category) // aw data-category we a3ml link.getattribute("data-category") aw link.dataset.category lw ana katbo category   
        // this.ui.displayGames(categoryData)
    }
    async getGames(category){
        this.loading.classList.replace("d-none","d-flex")
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'b50f65c561mshd3b1ce2a6f6b912p112512jsn2f2af56a0e34',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options);
        const response = await api.json();
        this.loading.classList.replace("d-flex","d-none")
        this.ui.displayGames(response)
        document.querySelectorAll(".card").forEach((card)=>{
            card.addEventListener("click",()=>{
                this.details.classList.remove("d-none")
                this.games.classList.add("d-none")
                new Details(card.dataset.id)
            })
        })
        window.addEventListener("keyup",(e)=>{
            if(e.code == "Escape")
            {
                document.getElementById("details").classList.add("d-none");
                document.getElementById("games").classList.remove("d-none");
            }   
        })
    }
}