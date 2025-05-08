import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetProvisionHistorica')
export class TblNoDetProvisionHistorica {
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuAnio?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuMes?: number;
  @Column('int', { nullable: false })
  NNuDias?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresos?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimo4?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimo3?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVacaciones?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtOrigen?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnOtroEmpleador?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeVacaciones?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeProvisionD4?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeProvisionD3?: string;

}