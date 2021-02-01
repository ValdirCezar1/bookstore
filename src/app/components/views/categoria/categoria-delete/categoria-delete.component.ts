import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Categoria } from "../categoria.model";
import { CategoriaService } from "../categoria.service";

@Component({
  selector: "app-categoria-delete",
  templateUrl: "./categoria-delete.component.html",
  styleUrls: ["./categoria-delete.component.css"],
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = {
    id: "",
    nome: "",
    descricao: "",
  };

  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.findById();
  }

  findById(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.service.findById(id!).subscribe(
      (resposta) => {
        this.categoria = resposta;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  delete(): void {
    this.service.delete(this.categoria.id!).subscribe(
      (resposta) => {
        this.router.navigate(["categorias"]);
        this.service.menssagem("Categoria excluida com sucesso!");
      },
      (err) => {
        this.service.menssagem(err.error.error);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['categorias'])
  }

}
