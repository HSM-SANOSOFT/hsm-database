import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoGeSectorialIESS')
export class TblNoGeSectorialIESS {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiCodigoIESS?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CNoSectorialIESS?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSalarioMinimo?: any;
  @Column('int', { nullable: false })
  NIdNoSector?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeSectorialIESS?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: any;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: any;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
}