import { IsEmail, IsString, MinLength, IsOptional, IsEnum, IsInt, Min, Max } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserRole, CEFRStage } from '@prisma/client';

export class RegisterDto {
  @ApiProperty({ example: 'learner@fluently.ai' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Password123!' })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({ example: 'Jane Doe' })
  @IsString()
  fullName: string;

  @ApiPropertyOptional({ enum: UserRole, default: UserRole.STUDENT })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}

export class LoginDto {
  @ApiProperty({ example: 'learner@fluently.ai' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Password123!' })
  @IsString()
  password: string;

  @ApiPropertyOptional({ example: '123456' })
  @IsOptional()
  @IsString()
  twoFactorCode?: string;
}

export class SetupProfileDto {
  @ApiProperty({ example: 'en-US' })
  @IsString()
  nativeLanguageCode: string;

  @ApiProperty({ example: 'es-ES' })
  @IsString()
  targetLanguageCode: string;

  @ApiProperty({ enum: CEFRStage, default: CEFRStage.A1_BEGINNER })
  @IsEnum(CEFRStage)
  startingLevel: CEFRStage;

  @ApiPropertyOptional({ example: 'Software Engineer' })
  @IsOptional()
  @IsString()
  profession?: string;

  @ApiPropertyOptional({ example: 30 })
  @IsOptional()
  @IsInt()
  @Min(5)
  @Max(240)
  dailyGoalMinutes?: number;
}
