import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('WrkCriterioConsulta')
export class WrkCriterioConsulta {
  @PrimaryColumn({ type: 'varchar' })
  CCiEstacion?: any;
  @PrimaryColumn({ type: 'varchar' })
  CCiTipoParam?: any;
  @PrimaryColumn({ type: 'varchar' })
  NNuRegistro?: any;
  @Column({ type: 'char' })
  CCiCia?: string;
  @Column({ type: 'char' })
  CCiDivision?: string;
  @Column({ type: 'char' })
  CCiSucursal?: string;
  @Column({ type: 'varchar' })
  CCiTipoNomina?: string;
  @Column({ type: 'varchar' })
  CCiArea?: string;
  @Column({ type: 'varchar' })
  CCiCentroCosto?: string;
  @Column({ type: 'varchar' })
  CCiSubCentroCosto?: string;
  @Column({ type: 'varchar' })
  CCiCargo?: string;
  @Column('int', { nullable: true })
  NIdNoContrato?: any;
  @Column('int', { nullable: true })
  NIdNoEmpleado?: any;
  @Column('int', { nullable: true })
  NIdNoConcepto?: any;
  @Column('int', { nullable: true })
  NIdNoDesglose?: any;
  @Column({ type: 'varchar' })
  CCiReferencia1?: string;
  @Column({ type: 'varchar' })
  CCiReferencia2?: string;
  @Column({ type: 'varchar' })
  CCiReferencia3?: string;
  @Column('int', { nullable: true })
  NIdGeReferencia1?: any;
  @Column('int', { nullable: true })
  NIdGeReferencia2?: any;
  @Column('int', { nullable: true })
  NIdGeReferencia3?: any;
  @Column('int', { nullable: true })
  NIdGeReferencia4?: any;
  @Column('datetime', { nullable: true })
  DFxRegistro?: any;
  @Column('numeric', { precision: 18, scale: 2 })
  NVtValor1?: any;
  @Column('numeric', { precision: 18, scale: 2 })
  NNuCantidad?: any;
}