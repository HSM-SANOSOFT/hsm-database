import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLaborCuadrillaEmpl')
export class TblNoDetLaborCuadrillaEmpl {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLabor?: any;
  @Column('int', { nullable: false })
  NNuSecuencia?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHoraNormal?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHoraExtra50?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHoraExtra100?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  cSnAdicional?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnAutomatico?: any;
}