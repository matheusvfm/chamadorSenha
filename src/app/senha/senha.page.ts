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
  senhaCounters: { [key: string]: number } = {
    'EMERGÊNCIA': 1,
    'EXAMES': 1,
    'CONSULTAS': 1
  };

  constructor() {}

  ngOnInit() {
    this.getNextSenha();
  }

  getNextSenha() {
    if (this.senhas.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.senhas.length);
      const senha = this.senhas[randomIndex];
      const nextNumber = this.getNextNumber(senha.type);
      senha.number = this.generateSenhaNumber(senha.type, nextNumber);
      this.currentSenha = senha;
      this.senhas.splice(randomIndex, 1);
    } else {
      this.currentSenha = new Senha('', '', '');
    }
  }

  getNextNumber(type: string): number {
    const nextNumber = this.senhaCounters[type];
    this.senhaCounters[type] += 1;
    return nextNumber;
  }

  generateSenhaNumber(type: string, number: number): string {
    const paddedNumber = number.toString().padStart(3, '0');
    return `${type.charAt(0)}${paddedNumber}`;
  }

  nextSenha() {
    if (this.senhas.length === 0) {
      this.senhas = [
        new Senha('EMERGÊNCIA', 'red', 'E001'),
        new Senha('EXAMES', 'blue', 'EX001'),
        new Senha('CONSULTAS', 'green', 'C001'),
      ];
    }
    this.getNextSenha();
  }
}
