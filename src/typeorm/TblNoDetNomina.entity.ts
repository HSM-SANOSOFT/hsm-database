import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetNomina')
export class TblNoDetNomina {
  @PrimaryColumn('int', { nullable: false })
  NIdNoNomina?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: any;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoDesglose?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuCantidad?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConcepto?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtNeto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtRegistro?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: string;
  @Column('int', { nullable: false })
  NNuAnioProvision?: any;
  @Column('int', { nullable: false })
  NNuMesProvision?: any;
  @Column('int', { nullable: false })
  NIdNoPrestamo?: any;
  @Column('int', { nullable: false })
  NNuCuota?: any;

}