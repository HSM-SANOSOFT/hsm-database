import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetHorasLaboradas')
export class TblGeDetHorasLaboradas {
  @PrimaryColumn('int', { nullable: false })
  NIdGeHoras?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoEmpleado?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoDia?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldoHora?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasLaboradas?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasPagoIndividual?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasPagoNomina?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuHorasPagoLiquidacion?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuDias?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuDiasIndividual?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtHorasPagoNomina?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCePago?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCePagoIndividual?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMotivo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column('int', { nullable: false })
  NIdNoNomina?: any;
  @Column('int', { nullable: false })
  NIdNoSecNomina?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeContrato?: string;
}