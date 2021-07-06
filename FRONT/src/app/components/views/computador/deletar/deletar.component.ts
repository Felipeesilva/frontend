import { Administrativo } from '../../../../models/Computador';
import { SolicitacaoService } from 'src/app/service/computador.service';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['/deletar.component.css']
})
export class DeletarAdministrativo implements OnInit {
  administrativos = ["responsavel", "matriculaAdm"];

  responsavel!: string;
  matriculaAdm!: string;

  constructor(private service: SolicitacaoService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {}

  deletarAdministrativo(matriculaAdm:string): void{
    console.log(this.deletarAdministrativo);
    this.service.deletarAdministrativo(matriculaAdm).subscribe((matriculaAdm) =>{
      console.log(matriculaAdm);
      this.snack.open("Administrativo deletado", "Administrativo",{
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate(["/administrativo/listarAdministrativo"]);
      this.ngOnInit
    });
  }

}