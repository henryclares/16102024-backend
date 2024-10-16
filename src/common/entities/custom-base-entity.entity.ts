import { BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class CustomBaseEntity extends BaseEntity {
  constructor(data?: Partial<CustomBaseEntity>) {
    super();
    if (data) Object.assign(this, data);
  }

  @CreateDateColumn({
    type: 'timestamp without time zone',
    nullable: false,
    default: () => 'now()',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp without time zone',
    nullable: true,
  })
  updatedAt?: Date;
}
