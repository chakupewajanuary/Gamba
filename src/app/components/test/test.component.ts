import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  count=signal<number>(0);


  countChange(){
    this.count.update((v)=>v+1);
  }

}
