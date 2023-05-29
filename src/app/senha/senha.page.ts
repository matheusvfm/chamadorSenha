import { Component, OnInit } from '@angular/core';

class Senha {
  constructor(public type: string, public color: string, public number: string) {}
}

@Component({
  selector: 'app-senha',
  templateUrl: 'senha.page.html',
  styleUrls: ['senha.page.scss'],
})
export class SenhaPage implements OnInit {
  senhas: Senha[] = [
    new Senha('EMERGÊNCIA', 'red', 'E001'),
    new Senha('EXAMES', 'blue', 'EX001'),
    new Senha('CONSULTAS', 'green', 'C001'),
  ];
  currentSenha: Senha = new Senha('', '', '');

  constructor() {}

  ngOnInit() {
    this.getNextSenha();
  }

  getNextSenha() {
    if (this.senhas.length > 0) {
      this.currentSenha = this.senhas[0];
      this.senhas.shift();
    } else {
      this.currentSenha = new Senha('', '', ''); // Valor padrão vazio
    }
  }

  nextSenha() {
    this.getNextSenha();
  }
}
