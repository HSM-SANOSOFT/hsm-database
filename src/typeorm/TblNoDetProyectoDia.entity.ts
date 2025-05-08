import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetProyectoDia')
export class TblNoDetProyectoDia {
  @PrimaryColumn('int', { nullable: false })
  NNuControl?: any;
  @PrimaryColumn('int', { nullable: false })
  NnuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('datetime', { nullable: false })
  DFxVigencia?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoDia?: any;
  @Column('datetime', { nullable: false })
  DFxRegistro?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCostoOrig?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtColor?: string;

}