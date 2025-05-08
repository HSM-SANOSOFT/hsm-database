import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoAuxiliar')
export class TblNoAuxiliar {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiAuxiliar?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsAuxiliar?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeAuxiliar?: string;
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