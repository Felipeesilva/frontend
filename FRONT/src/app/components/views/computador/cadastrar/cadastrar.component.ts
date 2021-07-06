import { SolicitacaoService } from '../../../../service/computador.service';
// import { MatTableDataSource } from "@angular/material/table";
import { Administrativo } from "../../../../models/Computador";
import { Funcionario } from 'src/app/models/Funcionario';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class CadastrarAdministrativo implements OnInit {
  administrativos = ["responsavel", "matriculaAdm"];

  responsavel!: string;
  matriculaAdm!: string;

  constructor(private service: SolicitacaoService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void { }

  cadastrarAdministrativo(): void{
    console.log(this.cadastrarAdministrativo);
    let administrativo = new Administrativo();
    administrativo.responsavel = this.responsavel;
    administrativo.matriculaAdm = this.matriculaAdm;
    this.service.cadastrarAdministrativo(administrativo).subscribe((administrativo) => {
      console.log(administrativo);
      this.snack.open("Administrativo cadastrado", "Administrativo",{
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate(["/administrativo/listarAdministrativo"]);
    });
  }
}

