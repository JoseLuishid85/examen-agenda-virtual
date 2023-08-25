import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/agenda';
import { AgentaService } from 'src/app/services/agenta.service';

@Component({
    selector: 'app-crear-agenda',
    templateUrl: './crear-agenda.component.html',
    styleUrls: ['./crear-agenda.component.css']
})
export class CrearAgendaComponent implements OnInit {

    clienteForm: FormGroup;
    id: string | null;
    titulo = 'Crear Cliente';

    constructor(
        private fb: FormBuilder,
        private aRouter: ActivatedRoute,
        private _clienteService: AgentaService,
        private router: Router,
    ) {
        this.clienteForm = this.fb.group({
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            telefono: ['', Validators.required]
        })
        this.id = this.aRouter.snapshot.paramMap.get('id')
    }

    ngOnInit(): void {
        this.esEditar();
    }

    agregarCliente() {
        //console.log(this.clienteForm.value.nombre);

        const CLIENTE: Cliente = {
            nombre: this.clienteForm.get('nombre')?.value,
            apellido: this.clienteForm.get('apellido')?.value,
            telefono: this.clienteForm.get('apellido')?.value
        }



        if (this.id !== null) {

            //Editamos Cliente
            this._clienteService.editarCliente(this.id, CLIENTE).subscribe(data => {
                this.router.navigate(['/']);
            }, error => {
                console.log(error);
                this.clienteForm.reset();
            })
        } else {
            //Agregarmos Cliente
            this._clienteService.guardarCliente(CLIENTE).subscribe(data => {
                // this.toastr.success('El Producto fue Registrado con Exito', 'Producto Registrado');
                this.router.navigate(['/']);
            }, error => {
                console.log(error);
                this.clienteForm.reset();
            });
        }

    }

    esEditar2() {

        if (this.id !== null) {
            this.titulo = "Editar Cliente";
            this._clienteService.obtenerCliente(this.id).subscribe(data => {
                this.clienteForm.setValue({
                    nombre: data.nombre,
                    apellido: data.apellido,
                    telefono: data.telefono,
                })
            })
        }
    }

    esEditar() {
        if (this.id !== null) {
            this.titulo = "Editar Cliente";
            this._clienteService.obtenerCliente(this.id).subscribe(data => {
            this.clienteForm.setValue({
                    nombre: data.nombre,
                    apellido: data.apellido,
                    telefono: data.telefono,
            })  
            });
        }
    }
      
      
      
      
      
      
}

