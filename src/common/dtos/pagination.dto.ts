import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    default: 10,
    description: 'How many rows do you need',
  })
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  limit?: number;

  @ApiProperty({
    default: 5,
    description: 'How many rows do you want to skip',
  })
  @IsOptional()
  @Min(0)
  @Type(() => Number)
  offset?: number;

  @ApiProperty({
    default: '',
    description: 'Filter results by gender',
  })
  @IsOptional()
  gender: 'men' | 'women' | 'unisex' | 'kid';
}
