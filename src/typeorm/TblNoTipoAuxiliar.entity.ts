import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoTipoAuxiliar')
export class TblNoTipoAuxiliar {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiTipoAuxiliar?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsTipoAuxiliar?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeTipoAuxiliar?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
}