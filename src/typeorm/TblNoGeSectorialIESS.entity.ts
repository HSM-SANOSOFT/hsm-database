import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoGeSectorialIESS')
export class TblNoGeSectorialIESS {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiCodigoIESS?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CNoSectorialIESS?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSalarioMinimo?: number;
  @Column('int', { nullable: false })
  NIdNoSector?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeSectorialIESS?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFiIngreso?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: Date;
}