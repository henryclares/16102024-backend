import { Rol } from 'src/common/constants';
import { CustomBaseEntity } from 'src/common/entities/custom-base-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'employees' })
export class Employee extends CustomBaseEntity {
  constructor(data?: Partial<Employee>) {
    super(data);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  role: Rol;

  @Column()
  message: string;
}
