import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetDatosCCosto')
export class TblNoDetDatosCCosto {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @PrimaryColumn('int', { nullable: false })
  NidNoContrato?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoDia?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoHora?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoAnual?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoBase?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeArea?: string;

}