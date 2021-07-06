import { Administrativo, Computador } from '../../../../models/Computador';
import { SolicitacaoService } from 'src/app/service/computador.service';
import { DeletarComputador } from '../deletar/deletar.component';
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComputador implements OnInit {
  computador!: MatTableDataSource<Computador>;
  displayedColumns: string[] = ['dono','placamae', 'processador', 'memoria', 'armazenamento', 'fonte'];

  responsavel!: string;
  matriculaAdm!: number;

  constructor(private service: ComputadorService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.service.ListarComputador().subscribe((computador) =>{
      this.computador = new MatTableDataSource<Computador>(computador);
    })
  }

  
}
