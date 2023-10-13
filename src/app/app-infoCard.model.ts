interface IDataCard{
    id: number,
    name: string,
    description: string
    urlImg: string,
    rating: number,
    category: string,
}

export class infoCard {
    
    dataCard!: IDataCard;

    constructor(id:number, name:string, description:string, urlImg:string, rating:number, category:string){
        this.dataCard.id = id;
        this.dataCard.name = name;
        this.dataCard.urlImg = urlImg;
        this.dataCard.rating = rating;
        this.dataCard.category = category;
    }

}