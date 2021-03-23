import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidoService } from '../../services/domain/pedido.service';
import { OrderConfirmationPage } from './order-confirmation';

@NgModule({
  providers: [
    PedidoService
  ],
  declarations: [
    OrderConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderConfirmationPage),
  ],
})
export class OrderConfirmationPageModule {}
