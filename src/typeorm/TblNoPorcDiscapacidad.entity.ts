import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoPorcDiscapacidad')
export class TblNoPorcDiscapacidad {
  @PrimaryColumn('int', { nullable: false })
  NNuAnio?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NNuPorcDesde?: any;
  @Column('int', { nullable: false })
  NNuPorcHasta?: any;
  @Column('int', { nullable: false })
  NNuPorcAplicar?: any;
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