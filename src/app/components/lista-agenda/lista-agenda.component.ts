import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/agenda';
import { AgentaService } from 'src/app/services/agenta.service';

@Component({
  selector: 'app-lista-agenda',
  templateUrl: './lista-agenda.component.html',
  styleUrls: ['./lista-agenda.component.css']
})
export class ListaAgendaComponent implements OnInit {
  
  listaCliente: Cliente[] = [];

  constructor(
    private _clienteservice:AgentaService){

  }

  ngOnInit(): void {
    this.obtenerCientes()
  }

  obtenerCientes(){
    this._clienteservice.getClientes().subscribe( data => {
      this.listaCliente = data;
      console.log(data)
    }, error =>{
      console.log(error);
    })
  }

  eleminarCliente(id:any){
    this._clienteservice.eliminarCliente(id).subscribe(data =>{
      this.obtenerCientes();
    },error =>{
      console.log(error);
    })
  }

 

}
