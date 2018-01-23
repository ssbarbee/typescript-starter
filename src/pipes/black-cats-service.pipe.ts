import { HttpException } from '@nestjs/common';
import {
  PipeTransform,
  Pipe,
  ArgumentMetadata,
  HttpStatus,
} from '@nestjs/common';

@Pipe()
export class BlackCatsServicePipe implements PipeTransform<string> {
  async transform(value: string, metadata: ArgumentMetadata) {
    const isValid = value && value.indexOf('black') !== -1;
    if (!isValid) {
      throw new HttpException('Validation failed. This service allows only black cats', HttpStatus.BAD_REQUEST);
    }
    return value;
  }
}
