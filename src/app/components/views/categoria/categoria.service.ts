import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Categoria } from "./categoria.model";

@Injectable({
  providedIn: "root",
})
export class CategoriaService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snackbar: MatSnackBar) {}

  findAll(): Observable<Categoria[]> {
    const url = `${this.baseUrl}/categorias`;
    return this.http.get<Categoria[]>(url);
  }

  findById(str: String): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias/${str}`
    return this.http.get<Categoria>(url)
  }

  create(obj: Categoria): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias`;
    return this.http.post<Categoria>(url, obj);
  }

  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/categorias/${id}`
    return this.http.delete<void>(url);
  }

  update(categoria: Categoria): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias/${categoria.id}`
    return this.http.put<Categoria>(url, categoria)
  }

  menssagem(str: String): void {
    this._snackbar.open(`${str}`, "OK", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }
}
