import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, Input } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styles: [
  ]
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;

  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('ComponenteHijo: ngOnInit');

    this.interval$ = interval(1000).subscribe(value => console.log(`Tick ${value}`)
    )
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ComponenteHijo: ngOnChanges');
    console.log({changes});
  }
  ngOnDestroy(): void {
    console.log('ComponenteHijo: ngOnDestroy');
    this.interval$?.unsubscribe();
  }

}
