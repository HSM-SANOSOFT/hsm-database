import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCabObreroDias')
export class TblNoCabObreroDias {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdNoJefeInmediato?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuAnio?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuPeriodo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeEstado?: any;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiProyecto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubProyecto?: any;

}