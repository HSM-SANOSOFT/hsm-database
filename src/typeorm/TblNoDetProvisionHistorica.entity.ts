import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetProvisionHistorica')
export class TblNoDetProvisionHistorica {
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuAnio?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuMes?: any;
  @Column('int', { nullable: false })
  NNuDias?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtIngresos?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimo4?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtDecimo3?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtVacaciones?: any;
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