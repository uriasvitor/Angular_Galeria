import { Component, OnInit } from "@angular/core";
import { ICardImage } from "src/app/models/cardImage.model";
import { GaleriaService } from "src/app/services/image/galeria.service";


@Component({
  selector:'app-card',
  templateUrl:'card.component.html',
  styleUrls:['./card.component.scss']
})

export class CardComponent implements OnInit{
  images?: ICardImage[] | undefined;
  maxHeight: number = 1200;

  constructor(private galeriaService: GaleriaService){}

  ngOnInit(): void {
    this.galeriaService.getImages().subscribe({
      next:(data)=>{
        this.images = data
        console.log(data)
      }
    })
  }

  getLinhas(): ICardImage[][] {
    const linhas: ICardImage[][] = [];
    const tamanhoLinha = 3;

    for (let i = 0; i < this.images?.length!; i += tamanhoLinha) {
      linhas.push(this.images?.slice(i, i + tamanhoLinha) || []);
    }

    return linhas;
  }


}
