import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeCentroCosto')
export class TblGeCentroCosto {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeCentroCosto?: string;
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
  @Column({ type: 'char', length: 1, nullable: false })
  CSnRegistroProyDia?: string;
}