import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { CreateOrderRequest } from './dto/create-order-request';

describe('OrdersController', () => {
  let ordersController: OrdersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [OrdersService],
    }).compile();

    ordersController = app.get<OrdersController>(OrdersController);
  });

  describe('root', () => {
    // Should create an order with valid input data
    it('should create an order with valid input data', async () => {
      const request: CreateOrderRequest = {
        name: 'Test Order',
        price: 10,
        phoneNumber: '1234567890',
      };
      const result = await ordersController.createOrder(request);
      expect(result).toBeDefined();
      expect(result.name).toEqual(request.name);
      expect(result.price).toEqual(request.price);
      expect(result.phoneNumber).toEqual(request.phoneNumber);
    });

    it('should return the created order with valid input data', async () => {
      const request: CreateOrderRequest = {
        name: 'Test Order',
        price: 10,
        phoneNumber: '1234567890',
      };
      const result = await ordersController.createOrder(request);
      expect(result).toBeDefined();
      expect(result.name).toEqual(request.name);
      expect(result.price).toEqual(request.price);
      expect(result.phoneNumber).toEqual(request.phoneNumber);
    });
  });
});
