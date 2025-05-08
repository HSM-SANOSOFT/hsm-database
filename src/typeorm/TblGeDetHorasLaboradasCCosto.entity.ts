import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetHorasLaboradasCCosto')
export class TblGeDetHorasLaboradasCCosto {
  @PrimaryColumn('int', { nullable: false })
  NIdGeHoras?: number;
  @PrimaryColumn('int', { nullable: false })
  NIdNoEmpleado?: number;
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHoras?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasReales?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMotivo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacionMotivo?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtRegistro?: string;
}