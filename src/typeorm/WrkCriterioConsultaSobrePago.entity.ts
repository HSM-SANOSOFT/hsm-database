import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('WrkCriterioConsultaSobrePago')
export class WrkCriterioConsultaSobrePago {
  @PrimaryColumn({ type: 'varchar' })
  CCiEstacion?: string;
  @PrimaryColumn({ type: 'varchar' })
  CCiTipoParam?: string;
  @PrimaryColumn({ type: 'int' })
  NNuRegistro?: number;
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
  NIdNoContrato?: number;
  @Column('int', { nullable: true })
  NIdNoEmpleado?: number;
  @Column('int', { nullable: true })
  NIdNoConcepto?: number;
  @Column('int', { nullable: true })
  NIdNoDesglose?: number;
  @PrimaryColumn({ type: 'varchar' })
  CCiReferencia1?: string;
  @Column({ type: 'varchar' })
  CCiReferencia2?: string;
  @Column({ type: 'varchar' })
  CCiReferencia3?: string;
  @Column('int', { nullable: true })
  NIdGeReferencia1?: number;
  @Column('int', { nullable: true })
  NIdGeReferencia2?: number;
  @Column('int', { nullable: true })
  NIdGeReferencia3?: number;
  @Column('int', { nullable: true })
  NIdGeReferencia4?: number;
  @Column('datetime', { nullable: true })
  DFxRegistro?: Date;
  @Column('numeric', { precision: 18, scale: 2 })
  NVtValor1?: number;
  @Column('numeric', { precision: 18, scale: 2 })
  NNuCantidad?: number;

}