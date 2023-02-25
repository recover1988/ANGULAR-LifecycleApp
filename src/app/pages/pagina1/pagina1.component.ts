import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {

  nombre: string = 'fercan';
  segundos: number = 0;
  timerSubscription!: Subscription;
  guardar() { }
  //inyecciones de dependencias
  constructor() {
    console.log('constructor')
  }
  //peticiones http, llenar componentes
  ngOnInit(): void {
    console.log('ngOnInit')
    this.timerSubscription = interval(1000).subscribe(i => this.segundos = i)

  };
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe()
    console.log('timer limpiado');
  }

  ;



}
