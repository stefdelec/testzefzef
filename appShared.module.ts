import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InAppService } from './services/in-app-service.module';
import { SharedComponentsModule } from './shared/shared-components.module';
import { MyAccountComponentModule } from './components/my-account/my-account.component.module';
import { MappingModule } from 'app/components/mapping/mapping.module';

const Modules = [
	CommonModule,
	InAppService,
	SharedComponentsModule,
	MyAccountComponentModule.forRoot(),
  MappingModule.forRoot(),
];

@NgModule({
	imports: Modules,
	exports: [
		CommonModule,
		InAppService,
		SharedComponentsModule,
		MyAccountComponentModule,
    MappingModule
	],

})
// small change

export class SharedModule {
}
