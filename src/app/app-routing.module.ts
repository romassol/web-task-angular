import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PayFromYourOnlineBankComponent} from './pay-from-your-online-bank/pay-from-your-online-bank.component';
import {PayWithAnyBankCardComponent} from './pay-with-any-bank-card/pay-with-any-bank-card.component';
import {RequestPaymentComponent} from './request-payment/request-payment.component';

const routes: Routes = [{path: 'pay-from-your-online-bank', component: PayFromYourOnlineBankComponent},
  {path: '', component: PayWithAnyBankCardComponent},
  {path: 'request-payment', component: RequestPaymentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
