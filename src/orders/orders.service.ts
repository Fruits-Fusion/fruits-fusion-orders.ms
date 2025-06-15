import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PaginationDto } from 'src/common';
import { PrismaClient } from '@prisma/client';
import enviroment from '../config/configuration';

@Injectable()
export class OrdersService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('ProductService');

  onModuleInit() {
    this.logger.log(
      `${enviroment().MICROSERVICE_NAME} running database instance successfully`,
    );
  }

  create(createOrderDto: CreateOrderDto) {
    return `This action adds a new order ${JSON.stringify(createOrderDto)}`;
  }

  findAll(paginationDto: PaginationDto) {
    return `This action returns all orders ${paginationDto}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  updateOrderStatus(id: number) {
    return `This action updates a #${id} order`;
  }
}
