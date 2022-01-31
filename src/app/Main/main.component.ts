import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class mainComponent {
  @Input() nombreJuego: String;

  constructor() {
    this.nombreJuego = "";
  }

  ngOnInit(): void {}
}






