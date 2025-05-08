import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCAPermiso')
export class TblCAPermiso {
  @PrimaryColumn('int', { nullable: false })
  NIdCAPermiso?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @Column('int', { nullable: false })
  NNuControl?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiArea?: any;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('int', { nullable: false })
  NNuPeriodo?: any;
  @Column('int', { nullable: false })
  NidNoJefeInmediato?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMotivo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsObservacion?: any;
  @Column('int', { nullable: false })
  NidNoContrato?: any;
  @Column('datetime', { nullable: false })
  DFxPermiso?: any;
  @Column('datetime', { nullable: false })
  DFxHorasPermiso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCePermiso?: any;
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