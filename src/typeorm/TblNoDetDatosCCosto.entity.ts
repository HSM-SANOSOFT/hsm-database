import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetDatosCCosto')
export class TblNoDetDatosCCosto {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @PrimaryColumn('int', { nullable: false })
  NidNoContrato?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoDia?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoHora?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoAnual?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoBase?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeArea?: any;

}