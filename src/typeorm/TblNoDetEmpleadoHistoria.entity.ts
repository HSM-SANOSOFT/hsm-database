import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetEmpleadoHistoria')
export class TblNoDetEmpleadoHistoria {
  @PrimaryColumn('int', { nullable: false })
  NIdNoEmpleado?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @Column('datetime', { nullable: false })
  DFxVigencia?: any;
  @Column('datetime', { nullable: false })
  DFxSalida?: any;
  @Column('int', { nullable: false })
  NNuDias?: any;
  @Column('int', { nullable: false })
  NidNoReferencia?: any;
}