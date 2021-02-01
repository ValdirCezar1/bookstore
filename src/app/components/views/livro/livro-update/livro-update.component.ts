import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { LivroServiceService } from "../livro-service.service";
import { Livro } from "../livro.model";

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {

  id_cat: String = "";

  livro: Livro = {
    id: "",
    titulo: "",
    nome_autor: "",
    texto: "",
  };

  titulo = new FormControl("", Validators.minLength(3));
  nome_autor = new FormControl("", Validators.minLength(3));
  texto = new FormControl("", Validators.minLength(10));

  constructor(
    private route: ActivatedRoute,
    private service: LivroServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
    this.livro.id = this.route.snapshot.paramMap.get("id_livro")!;
  }

  create():void {
    this.service.create(this.livro, this.id_cat).subscribe(resposta => {
      this.router.navigate([`categorias/${this.id_cat}/livros`])
    }, err => {
      this.router.navigate([`categorias/${this.id_cat}/livros`])
      console.log('Algo deu errado')
    })
  }

  cancel():void {
    this.router.navigate([`categorias/${this.id_cat}/livros`])
  }

  getErrorMessage() {
    if (this.titulo.invalid) {
      return "O campo TITULO deve ter entre 3 e 100 caracteres";
    }

    if (this.nome_autor.invalid) {
      return "O campo NOME DO AUTOR deve ter entre 3 e 100 caracteres";
    }

    if (this.texto.invalid) {
      return "O campo TEXTO deve ter entre 10 e 2.000.000 caracteres";
    }
    return false;
  }

}
