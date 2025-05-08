import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetHorasLaboradas')
export class TblGeDetHorasLaboradas {
  @PrimaryColumn('int', { nullable: false })
  NIdGeHoras?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoDia?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoHora?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasLaboradas?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasPagoIndividual?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasPagoNomina?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasPagoLiquidacion?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuDias?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuDiasIndividual?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHorasPagoNomina?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCePago?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCePagoIndividual?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMotivo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column('int', { nullable: false })
  NIdNoNomina?: number;
  @Column('int', { nullable: false })
  NIdNoSecNomina?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeContrato?: string;
}