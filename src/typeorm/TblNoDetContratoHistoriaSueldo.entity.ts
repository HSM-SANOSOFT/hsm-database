import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetContratoHistoriaSueldo')
export class TblNoDetContratoHistoriaSueldo {
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtHistoria?: string;
  @Column('datetime', { nullable: false })
  DFxHistoria?: any;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;

}