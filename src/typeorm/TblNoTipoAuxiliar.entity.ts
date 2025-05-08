import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoTipoAuxiliar')
export class TblNoTipoAuxiliar {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiTipoAuxiliar?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsTipoAuxiliar?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeTipoAuxiliar?: any;
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