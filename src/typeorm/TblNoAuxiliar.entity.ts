import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoAuxiliar')
export class TblNoAuxiliar {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiAuxiliar?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsAuxiliar?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeAuxiliar?: any;
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