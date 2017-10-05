import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule, Router } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextMaskModule } from 'angular2-text-mask';


// TRANSLATE MODULES
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// PAGE SCROLL MODULE
import { Ng2PageScrollModule } from 'ng2-page-scroll/ng2-page-scroll';

// APP COMPONENT
import { AppComponent } from './app.component';

// AUTH PROVIDERS
import { AuthGuard } from './guards/auth.guard';




// APP SERVICES
import { TutosAPIService } from '../api/tutos/index';
// import { GlobalService } from "./global.service"
import { ResponsiveBreakPointsService } from "./utils/services/responsive-break-points.service";
import { DateService } from './utils/index';
import { LanguagesService, RoutesService } from './config/index';

import { MultiStepFormService } from './shared/multi-step-form/multi-step-form.service';

// PAGES
import { AccountCreationComponent } from './pages/account-creation/index';
import { HomeComponent } from './pages/home/index';
import { ChangePasswordComponent } from './pages/change-password/index';
import { PageNotFoundComponent } from './pages/page-not-found/index';
import { LegalNoticesComponent } from './pages/legal-notices/legal-notices.component';
import { OfferPaymentComponent } from './pages/offer-payment/offer-payment.component';
import { FlexcheckoutComponent } from './pages/ingenico/index';
import { IbanConfirmationComponent } from './pages/iban-confirmation/index';
import { IbanCreationComponent } from './pages/iban-creation/index';

// SHARED
import { FooterSectionComponent } from './shared/footer-section/index';


// COMPONENTS
import { OffersSectionComponent } from './components/home/offers-section/index';
import { NewsSectionComponent } from './components/home/news-section/index';
import { NewsComponent } from './components/news/index';
import { ModalNewsComponent } from './components/home/news-section/modal-news/index';
import { TutosSectionComponent } from './components/home/tutos-section/index';
import { TutoComponent } from './components/tuto/index';
import { HangsSectionComponent } from './components/home/hangs-section/index';
import { SwitcherInputComponent } from './components/switcher-input/switcher-input.component';
import { AccountCreationFormComponent } from './components/account-creation-form/account-creation-form.component';
import { ThemeTrailSectionComponent } from './components/home/theme-trail-section/theme-trail-section.component';
import { ThemeTrailComponent } from './components/home/theme-trail-section/theme-trail/theme-trail/theme-trail.component';
import { MobileAppSectionComponent } from './components/home/mobile-app-section/mobile-app-section.component';
import { StationsSectionComponent } from './components/home/stations-section/stations-section.component';
import { CardBrandComponent } from './components/cardbrand/index';
import { RegisterCBComponent } from './components/register-cb/register-cb.component';
import { OgoneFlexcheckout } from './components/flexcheckout/index';
import { IbanCreationFormComponent } from './components/iban/iban-creation-form/index';
import { IbanConfirmationFormComponent } from './components/iban/iban-confirmation-form/index';
import { PaymentComponent } from './components/payment/payment.component';
import { ChooseCBComponent } from './components/payment/choose-cb/choose-cb.component';
import { PaymentModeListComponent } from './components/payment/payment-mode-list/payment-mode-list.component';
// import { MyAlertBannerComponent } from './components/my-account/my-alert-banner';


// ENDPOINTS
import { OpenidComponent } from './endpoints/openid/index';
import { ErrorsComponent } from './endpoints/errors/errors.component';
import { FileReaderComponent } from './endpoints/file-reader/file-reader.component';
import { OgoneRedirectAcceptComponent } from './endpoints/ogone/ogone-redirect-accept/ogone-redirect-accept.component';
import { RedirectComponent } from './endpoints/redirect/redirect.component';

// UTILS
import { VlsInputDirective } from './utils/directives/vls-input.directive';
import { ClearValidationOnfocusDirective } from './utils/directives/clear-validation-onfocus.directive';
import { HideOnDirective } from './utils/directives/hide-on.directive';
import { VlsOverflowEllipsisDirective } from './utils/directives/vls-overflow-ellipsis.directive';
import { GoToAnchorDirective } from './utils/directives/go-to-anchor.directive';
import { HtmltransformPipe } from './utils/pipes/htmltransform.pipe';

import { ArraysService } from './utils/arrays.service';
import { OgoneRedirectExceptionComponent } from './endpoints/ogone/ogone-redirect-exception/ogone-redirect-exception.component';


import { MyAccountPageComponent } from './pages/my-account-page/my-account-page.component';


import { OpenidErrorComponent } from './endpoints/openid-error/openid-error.component';

import { APIModule } from 'api/api.module';
import { InAppService } from './services/in-app-service.module';
import { SharedModule } from './VLS.module';



export function HttpLoaderFactory(_http: Http) {
  return new TranslateHttpLoader(_http, '/assets/i18n/', '.json');
}
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { velocity: 0.4, threshold: 20 } // override default settings
  };
}

import { LoginModule } from './components/login/login.module';
import { MyAccountInformationFormComponent } from './components/my-account/my-profil/my-account-information-form/my-account-information-form.component';
import { RouterFragmentLinkActiveDirective } from './utils/directives/router-fragment-link-active.directive';
import { FormatDateDirective } from 'app/utils/directives/format-date.directive';
import { MappingPageComponent } from 'app/pages/mapping/mapping.component';
import { UserActionComponent } from './endpoints/user-action/user-action.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HangsSectionComponent,
    FooterSectionComponent,
    NewsSectionComponent,
    NewsComponent,
    ModalNewsComponent,
    OffersSectionComponent,
    TutosSectionComponent,
    TutoComponent,
    AccountCreationComponent,
    OpenidComponent,
    PageNotFoundComponent,
    ChangePasswordComponent,
    SwitcherInputComponent,
    VlsInputDirective,
    AccountCreationFormComponent,
    IbanCreationComponent,
    IbanConfirmationComponent,
    IbanCreationFormComponent,
    IbanConfirmationFormComponent,
    ClearValidationOnfocusDirective,
    VlsOverflowEllipsisDirective,
    HideOnDirective,
    ErrorsComponent,
    LegalNoticesComponent,
    ThemeTrailSectionComponent,
    ThemeTrailComponent,
    GoToAnchorDirective,
    MobileAppSectionComponent,
    StationsSectionComponent,
    FileReaderComponent,
    OfferPaymentComponent,
    CardBrandComponent,
    RegisterCBComponent,
    OgoneFlexcheckout,
    FlexcheckoutComponent,
    HtmltransformPipe,
    OgoneRedirectAcceptComponent,
    RedirectComponent,
    PaymentComponent,
    ChooseCBComponent,
    OgoneRedirectExceptionComponent,
    PaymentModeListComponent,
    MyAccountPageComponent,
    OpenidErrorComponent,
    MappingPageComponent,
    UserActionComponent
  ],
  imports: [
    AppRoutingModule,
    APIModule.forRoot(),
    InAppService.forRoot(),
    RouterModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    Ng2PageScrollModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    LoginModule.forRoot(),
    TextMaskModule,
    SharedModule
  ],
  providers: [
    AuthGuard,
    ArraysService,
    ArraysService,
    DateService,
    MultiStepFormService,
    LanguagesService,
    ResponsiveBreakPointsService,
    RoutesService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }

  ],
  bootstrap: [AppComponent]

})
export class AppModule {
}
