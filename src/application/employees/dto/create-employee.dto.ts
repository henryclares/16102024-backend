import { IsEmail, IsEnum, IsString } from 'class-validator';
import { Rol, Rols } from 'src/common/constants';

export class CreateEmployeeDto {
  @IsString()
  name: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsEnum(Rols)
  @IsString()
  role: Rol;

  @IsString()
  message: string;
}
