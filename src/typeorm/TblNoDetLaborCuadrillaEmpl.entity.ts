import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetLaborCuadrillaEmpl')
export class TblNoDetLaborCuadrillaEmpl {
  @PrimaryColumn('int', { nullable: false })
  NIdNoLabor?: number;
  @Column('int', { nullable: false })
  NNuSecuencia?: number;
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHoraNormal?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHoraExtra50?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHoraExtra100?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  cSnAdicional?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnAutomatico?: string;
}