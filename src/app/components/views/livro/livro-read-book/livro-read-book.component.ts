import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LivroServiceService } from "../livro-service.service";
import { Livro } from "../livro.model";

@Component({
  selector: 'app-livro-read-book',
  templateUrl: './livro-read-book.component.html',
  styleUrls: ['./livro-read-book.component.css']
})
export class LivroReadBookComponent implements OnInit {

  id_cat: String = "";

  livro: Livro = {
    id: "",
    titulo: "",
    nome_autor: "",
    texto: "",
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
    this.livro.id = this.route.snapshot.paramMap.get("id_livro")!;
    this.livro.titulo = "Teste 123"
    this.livro.nome_autor = "Teste 123"
    this.livro.texto = ""
  }

  cancel():void {
    this.router.navigate([`categorias/${this.id_cat}/livros`])
  }

}
