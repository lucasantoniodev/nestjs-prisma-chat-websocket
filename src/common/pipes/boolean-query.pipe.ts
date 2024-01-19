import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class BooleanQueryPipeCustom implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value) {
      return false;
    }

    if (typeof value !== 'string') {
      throw new BadRequestException('Invalid boolean string');
    }

    const lowercaseValue = value.toLowerCase();

    if (lowercaseValue === 'true' || lowercaseValue === 'false') {
      return lowercaseValue === 'true';
    }

    throw new BadRequestException('Invalid boolean type');
  }
}
