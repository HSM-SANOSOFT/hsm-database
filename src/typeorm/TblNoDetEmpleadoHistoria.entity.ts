import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetEmpleadoHistoria')
export class TblNoDetEmpleadoHistoria {
  @PrimaryColumn('int', { nullable: false })
  NIdNoEmpleado?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column('datetime', { nullable: false })
  DFxVigencia?: Date;
  @Column('datetime', { nullable: false })
  DFxSalida?: Date;
  @Column('int', { nullable: false })
  NNuDias?: number;
  @Column('int', { nullable: false })
  NidNoReferencia?: number;
}