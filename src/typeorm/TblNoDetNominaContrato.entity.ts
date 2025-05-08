import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('TblNoDetNominaContrato')
export class TblNoDetNominaContrato {
  @PrimaryColumn('int')
  NidNoNomina!: number;

  @PrimaryColumn('int')
  NidNoContrato!: number;

  @PrimaryColumn({ type: 'varchar', length: 8 })
  CCiArea!: string;

  @PrimaryColumn({ type: 'varchar', length: 8 })
  CCiCentroCosto!: string;

  @PrimaryColumn({ type: 'varchar', length: 8 })
  CCiSubCentroCosto!: string;

  @PrimaryColumn({ type: 'char', length: 1 })
  CCtAfectacion!: string;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtIngresoAportables?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtIngresoNoAportables?: number;

  @Column('int', { nullable: true })
  NNuDiasLaborados?: number;

  @Column('int', { nullable: true })
  NNuDiasVacaciones?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtVacaciones?: number;

  @Column('numeric', { precision: 13, scale: 2, nullable: true })
  NVtSueldo?: number;

  @Column('numeric', { precision: 13, scale: 6, nullable: true })
  NVtSueldoDia?: number;

  @Column({ type: 'varchar', length: 8, nullable: true })
  CCiMaquinaria?: string;
}
