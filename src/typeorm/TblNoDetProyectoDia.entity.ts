import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetProyectoDia')
export class TblNoDetProyectoDia {
  @PrimaryColumn('int', { nullable: false })
  NNuControl?: number;
  @PrimaryColumn('int', { nullable: false })
  NnuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('datetime', { nullable: false })
  DFxVigencia?: Date;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoDia?: number;
  @Column('datetime', { nullable: false })
  DFxRegistro?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCostoOrig?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtColor?: string;

}