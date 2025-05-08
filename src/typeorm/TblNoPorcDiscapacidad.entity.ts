import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoPorcDiscapacidad')
export class TblNoPorcDiscapacidad {
  @PrimaryColumn('int', { nullable: false })
  NNuAnio?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NNuPorcDesde?: number;
  @Column('int', { nullable: false })
  NNuPorcHasta?: number;
  @Column('int', { nullable: false })
  NNuPorcAplicar?: number;
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