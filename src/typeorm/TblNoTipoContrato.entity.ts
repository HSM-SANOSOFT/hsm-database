import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoTipoContrato')
export class TblNoTipoContrato {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiTipoContrato?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsTipoContrato?: string;
  @Column('int', { nullable: false })
  NNuDuracion?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtTipoContrato?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnParcial?: string;
  @Column('int', { nullable: false })
  NNuHorasParcial?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeTipoContrato?: string;
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