import { Component, Input } from '@angular/core';
import { infoCard } from 'src/app/app-infoCard.model';

interface IDataCard{
  id: number,
  name: string,
  description: string
  urlImg: string,
  rating: number,
  category: string,
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //@Input() Card:infoCard;
  arrayInfoCard: IDataCard[] = [ 
    {
      id: 1,
      name: "Black Widow",
      description: "",
      urlImg:"../../../../assets/img/black_Widow.jpg",
      rating: 7,
      category: "Pelicula",
    },
    {
      id: 2,
      name: "Shang-Chi",
      description: "",
      urlImg:"../../../../assets/img/shang-chi.jpg",
      rating: 7,
      category: "Pelicula",
    },
    {

      id: 3,
      name: "Loki",
      description: "",
      urlImg:"../../../../assets/img/loki.jpg",
      rating: 7,
      category: "Serie",
    },
    {
      id: 3,
      name: "How I met your mother",
      description: "",
      urlImg:"../../../../assets/img/how-I-met-your-mother.jpg",
      rating: 7,
      category: "Serie",
    },
    {
      id: 4,
      name: "Bing Bang Theory",
      description: "",
      urlImg:"../../../../assets/img/bing-bang-theory.jpg",
      rating: 7,
      category: "Serie",
    },
    {
      id: 5,
      name: "Friends",
      description: "",
      urlImg:"../../../../assets/img/friends.jpg",
      rating: 7,
      category: "Serie",
    },
    {
      id: 6,
      name: "Money Heist",
      description: "",
      urlImg:"../../../../assets/img/money-heist.jpg",
      rating: 7,
      category: "Serie",
    },
    {
      id: 6,
      name: "Two and half men",
      description: "",
      urlImg:"../../../../assets/img/tow-and-half-men.jpg",
      rating: 7,
      category: "Serie",
    }
    ];
}
