import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
// BOOTSTRAP MODULES
import { PricePipe } from '../utils/pipes/price.pipe';

import { CountryListComponent } from './country-list/country-list.component';
import { DialogComponent } from './dialog/dialog.component';
import { LoaderComponent } from './loader/loader.component';
import { MultiStepFormModule } from './multi-step-form/multi-steps-form.module';
import { OfferComponent } from '../components/home/offers-section/offer/offer.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { ModalModule } from './modal/modal.module'
import { RouterFragmentLinkActiveDirective } from 'app/utils/directives/router-fragment-link-active.directive';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { ConversationalFormComponent } from './conversational-form';
import { StaticHeaderComponent } from 'app/shared/default/static-header';
import { InputFileComponent } from 'app/shared/form-components/input-file/input-file.component';
import { RadioButtonComponent } from 'app/shared/form-components/radio-button/radio-button.component';
import { LightFooterComponent } from 'app/shared/default/light-footer';
import { NotificationsContainerComponent } from 'app/shared/default/notifications-container/notifications-container.component';
import { SectionContainerComponent } from 'app/shared/default/section-container/section-container.component';
import { MyAlertBannerComponent } from 'app/shared/default/my-alert-banner';
import { TripsListItemComponent } from 'app/shared/default/trips-list-item';
import { FavoriteStationsListItemComponent } from 'app/shared/default/favorite-stations-list-item';
import { TitleRadioButtonComponent } from 'app/shared/default/title-radio-button/title-radio-button.component';
import { InputFocusDirective } from 'app/utils';
import { FormatTimePipe } from 'app/utils/pipes/format-time.pipe';
import { PipesModule } from 'app/utils/pipes/pipes.module';
import { PhoneModule } from './phone-module';
import { NgDeviceDetectorModule } from 'app/shared/ng-device-detector';
import { TabsModule } from 'app/shared/default/navigation-tabs/navigation-tabs.module';
import { RxjsCalendarModule } from 'vls-web-modules';
import { H9Component, H7Component, H8Component, H10Component, H11Component } from 'app/shared/html-headers';


const Components = [
  CountryListComponent,
  DialogComponent,
  OfferComponent,
  PricePipe,
  LoaderComponent,
  SvgIconComponent,
  RouterFragmentLinkActiveDirective,
  QuestionAnswerComponent,
  ConversationalFormComponent,
  StaticHeaderComponent,
  InputFileComponent,
  RadioButtonComponent,
  InputFocusDirective,
  LightFooterComponent,
  NotificationsContainerComponent,
  SectionContainerComponent,
  MyAlertBannerComponent,
  FavoriteStationsListItemComponent,
  TripsListItemComponent,
  TitleRadioButtonComponent,
  H9Component,
  H7Component,
  H8Component,
  H10Component,
  H11Component,
];
const Modules = [
  MultiStepFormModule,
  ModalModule,
  PipesModule,
  PhoneModule,
  NgDeviceDetectorModule,
  TabsModule,
  RxjsCalendarModule

];
@NgModule({
  declarations: Components,
  exports: [...Components, ...Modules],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    MultiStepFormModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    PipesModule,
    PhoneModule.forRoot(),
    NgDeviceDetectorModule.forRoot(),
    RxjsCalendarModule
  ],
})
export class SharedComponentsModule { }
