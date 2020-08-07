import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";

import { calculateAge } from "../helpers/calculateAge";

@Entity({ name: "developers" })
export class Developer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 60 })
  nome: string;

  @Column({ type: "char", length: 1, default: "M" })
  sexo: string;

  @Column()
  idade: number;

  @Column()
  hobby: string;

  @Column()
  datanascimento: Date;

  @BeforeInsert()
  @BeforeUpdate()
  setAge() {
    if (this.datanascimento) {
      this.idade = calculateAge(this.datanascimento);
    }
  }
}
