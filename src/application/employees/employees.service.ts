import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeesRepository: Repository<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    await this.employeesRepository.save(new Employee({ ...createEmployeeDto }));
    return createEmployeeDto;
  }

  async findAll() {
    return await this.employeesRepository.findAndCount();
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return await this.employeesRepository.update(id, { ...updateEmployeeDto });
  }
}
