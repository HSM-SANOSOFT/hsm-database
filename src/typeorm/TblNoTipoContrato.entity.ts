import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoTipoContrato')
export class TblNoTipoContrato {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiTipoContrato?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsTipoContrato?: any;
  @Column('int', { nullable: false })
  NNuDuracion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtTipoContrato?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnParcial?: any;
  @Column('int', { nullable: false })
  NNuHorasParcial?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeTipoContrato?: any;
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