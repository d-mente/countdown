import { NgModule } from '@angular/core';
import { UnitTimeComponent } from './unit-time/unit-time';
import { CommonModule } from "@angular/common"

@NgModule({
	declarations: [UnitTimeComponent],
	imports: [CommonModule],
	exports: [UnitTimeComponent]
})
export class ComponentsModule {}
