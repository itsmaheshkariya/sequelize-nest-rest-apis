import { ApiProperty } from "@nestjs/swagger";
import { Model, Column, Table } from "sequelize-typescript";
@Table
export class User extends Model {
    @Column
    @ApiProperty()
    name: string;
    @Column
    @ApiProperty()
    email: string;
    @Column
    @ApiProperty()
    password: string
}