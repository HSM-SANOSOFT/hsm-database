import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetContratoHistoriaSueldo')
export class TblNoDetContratoHistoriaSueldo {
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtHistoria?: string;
  @Column('datetime', { nullable: false })
  DFxHistoria?: Date;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;

}