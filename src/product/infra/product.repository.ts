import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ProductRequestDto } from '../dto/product.request.dto';
import { Product } from '../product.schema';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel(Product.name) private readonly ProductModel: Model<Product>,
  ) {}

  // 상품 id로 해당 상품 찾기
  async findProductDetail(id: string | Types.ObjectId) {
    try {
      const result = await this.ProductModel.findOne({ _id: id });
      return result;
    } catch (error) {
      // console.log(error);
      return undefined;
    }
  }

  // 상품 전체 찾기
  async findAllProduct() {
    return await this.ProductModel.find();
  }

  // 상품 등록
  async create(product: ProductRequestDto): Promise<Product> {
    return await this.ProductModel.create(product);
  }
}
