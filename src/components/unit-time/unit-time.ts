import { Component, Input} from '@angular/core';


@Component({
  selector: 'unit-time',
  templateUrl: 'unit-time.html'
})
export class UnitTimeComponent {

  @Input() label: string = ''
  @Input() value: string = ''

  constructor() {
  }

}
