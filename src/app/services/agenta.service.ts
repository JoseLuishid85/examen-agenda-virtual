import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/agenda';

@Injectable({
  providedIn: 'root'
})
export class AgentaService {
  url = 'http://localhost:3000/api/cliente/';

  constructor(private http: HttpClient) { }

  getClientes():Observable<any>{
    return this.http.get(this.url);
  }

  guardarCliente(cliente: Cliente):Observable<any>{
    return this.http.post(this.url, cliente);
  }


  obtenerCliente(id:string):Observable <any>{
    return this.http.get(this.url + id);
  }

  editarCliente(id:string,cliente:Cliente): Observable <any>{
    return this.http.put(this.url + id, cliente);
  }

  eliminarCliente(id:string):Observable <any>{
    return this.http.delete(this.url + id);
  }
}
