import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { FooterComponent } from './footer/footer.component';
import { LinkComponent } from './footer/link/link.component';
import { AdditionInformationComponent } from './addition-information/addition-information.component';
import { CompanyProductsComponent } from './company-products/company-products.component';
import { ProductComponent } from './company-products/product/product.component';
import { PayWithAnyBankCardComponent } from './pay-with-any-bank-card/pay-with-any-bank-card.component';
import { CardComponent } from './pay-with-any-bank-card/card/card.component';
import { SumComponent } from './pay-with-any-bank-card/sum/sum.component';
import { PayFromYourOnlineBankComponent } from './pay-from-your-online-bank/pay-from-your-online-bank.component';
import { RequestPaymentComponent } from './request-payment/request-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    FooterComponent,
    LinkComponent,
    AdditionInformationComponent,
    CompanyProductsComponent,
    ProductComponent,
    PayWithAnyBankCardComponent,
    CardComponent,
    SumComponent,
    PayFromYourOnlineBankComponent,
    RequestPaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
