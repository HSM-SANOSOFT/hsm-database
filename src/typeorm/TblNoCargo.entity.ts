import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCargo')
export class TblNoCargo {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCargo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsCargo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtCargo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiNivel?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnCancelaNomina?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeCargo?: any;
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
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NvtSueldoReal?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NvtSueldoIEES?: any;
}