import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { Order } from './schemas/order.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class OrdersRepository extends AbstractRepository<Order> {
  protected readonly logger = new Logger(OrdersRepository.name);

  constructor(
    // InjectModel is a decorator that injects a Mongoose model provider.
    @InjectModel(Order.name) orderModule: Model<Order>,
    // InjectConnection is a decorator that injects a Mongoose connection provider.
    @InjectConnection() connection: Connection,
  ) {
    super(orderModule, connection);
  }

  async createOrder(order: Order) {
    return this.create(order);
  }
}
