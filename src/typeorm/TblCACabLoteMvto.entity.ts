import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCACabLoteMvto')
export class TblCACabLoteMvto {
  @Column('int', { nullable: false })
  NIdCALoteMvto!: number;

  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia!: string;

  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision!: string;

  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina!: string;

  @Column('int', { nullable: false })
  NNuAnio!: number;

  @Column('int', { nullable: false })
  NNuPeriodo!: number;

  @Column('int', { nullable: false })
  NIdNoNovedad!: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeLoteMvto!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso!: string;

  @Column('datetime', { nullable: false })
  DFiIngreso!: Date;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica!: string;

  @Column('datetime', { nullable: false })
  DFmModifica!: Date;
}
