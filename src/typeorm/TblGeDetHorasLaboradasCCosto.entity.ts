import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetHorasLaboradasCCosto')
export class TblGeDetHorasLaboradasCCosto {
  @PrimaryColumn('int', { nullable: false })
  NIdGeHoras?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdNoEmpleado?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHoras?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasReales?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMotivo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacionMotivo?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtRegistro?: string;
}