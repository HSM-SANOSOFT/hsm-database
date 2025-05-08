import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetNomina')
export class TblNoDetNomina {
  @PrimaryColumn('int', { nullable: false })
  NIdNoNomina?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: number;
  @Column('int', { nullable: false })
  NIdNoConcepto?: number;
  @Column('int', { nullable: false })
  NIdNoDesglose?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuCantidad?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConcepto?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtNeto?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtRegistro?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: string;
  @Column('int', { nullable: false })
  NNuAnioProvision?: number;
  @Column('int', { nullable: false })
  NNuMesProvision?: number;
  @Column('int', { nullable: false })
  NIdNoPrestamo?: number;
  @Column('int', { nullable: false })
  NNuCuota?: number;

}