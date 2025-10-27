import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Aluno {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;

    @Column()
    email!: string;

    @Column()
    data_nascimento?: Date;

}