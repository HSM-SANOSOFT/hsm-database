import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('WrkCriterioConsultaSobrePago')
export class WrkCriterioConsultaSobrePago {
  @PrimaryColumn({ type: 'varchar' })
  CCiEstacion?: any;
  @PrimaryColumn({ type: 'varchar' })
  CCiTipoParam?: any;
  @PrimaryColumn('int', { nullable: true })
  NNuRegistro?: any;
  @Column({ type: 'char' })
  CCiCia?: any;
  @Column({ type: 'char' })
  CCiDivision?: any;
  @Column({ type: 'char' })
  CCiSucursal?: any;
  @Column({ type: 'varchar' })
  CCiTipoNomina?: any;
  @Column({ type: 'varchar' })
  CCiArea?: any;
  @Column({ type: 'varchar' })
  CCiCentroCosto?: any;
  @Column({ type: 'varchar' })
  CCiSubCentroCosto?: any;
  @Column({ type: 'varchar' })
  CCiCargo?: any;
  @Column('int', { nullable: true })
  NIdNoContrato?: any;
  @Column('int', { nullable: true })
  NIdNoEmpleado?: any;
  @Column('int', { nullable: true })
  NIdNoConcepto?: any;
  @Column('int', { nullable: true })
  NIdNoDesglose?: any;
  @PrimaryColumn({ type: 'varchar' })
  CCiReferencia1?: any;
  @Column({ type: 'varchar' })
  CCiReferencia2?: any;
  @Column({ type: 'varchar' })
  CCiReferencia3?: any;
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