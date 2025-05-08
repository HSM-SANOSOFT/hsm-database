import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCargo')
export class TblNoCargo {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCargo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsCargo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtCargo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiNivel?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnCancelaNomina?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeCargo?: string;
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
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NvtSueldoReal?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NvtSueldoIEES?: number;
}