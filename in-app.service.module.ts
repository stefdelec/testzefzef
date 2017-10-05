import { NgModule } from '@angular/core';

import { AccountService } from './index';
import { AccountCreationFormService } from './account-creation-form/index';
import { CgauService } from './cgau/index';
import { ContractService } from './contract/index';
import { IbanConfirmationFormService } from './iban/iban-confirmation-form/index';
import { IbanCreationFormService } from './iban/iban-creation-form/index';
import { OffersService } from './offer/offers.service';
import { OfferObjectService } from './offer/offer-object.service';
import { FlexcheckoutRequestService, FlexcheckoutResponseService } from './ogone/index';
import { QuestionsService } from './questions/index';
import { UserService } from './index';
import { SubscriptionService } from './index';
import { OrderService } from './index';
import { ProcessService, ProcessResultService } from './index';
import { CreditCardService } from './credit-card/index';
import { VlsRouterService } from './router/vls-router.service';
import { GlobalService } from './global/global.service';
import { FaqsService } from 'app/services/faqs/faqs.service';
import { LibLazyLoaderService } from 'app/services/libraries-lazy-loader/lib-lazy-loader.service';
import { GlobalizeService } from 'app/services/globalize.service';
import { DocumentsSubscriptionsService } from 'app/services/subscription/documents-subscriptions.service';
import { KeysService } from "app/services/keys/keys.service";

@NgModule({

})
// small change
export class InAppService {
	static forRoot() {
		return {
			ngModule: InAppService,
			providers: [
				AccountService,
				AccountCreationFormService,
				CgauService,
				ContractService,
				IbanConfirmationFormService,
				IbanCreationFormService,
				OffersService,
				OfferObjectService,
				FaqsService,
				FlexcheckoutRequestService,
				FlexcheckoutResponseService,
				QuestionsService,
				UserService,
				OrderService,
				ProcessService,
				ProcessResultService,
				CreditCardService,
				VlsRouterService,
				SubscriptionService,
				GlobalService,
				GlobalizeService,
				LibLazyLoaderService,
				DocumentsSubscriptionsService,
				KeysService
			]
		};
	}
}
