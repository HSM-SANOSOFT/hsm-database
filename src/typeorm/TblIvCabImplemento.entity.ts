import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblIvCabImplemento')
export class TblIvCabImplemento {
  @PrimaryColumn('int', { nullable: false })
  NIdIvImplemento?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('int', { nullable: false })
  NNuPeriodo?: any;
  @Column('int', { nullable: false })
  NidNoNovedad?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeImplemento?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiEstacionIngreso?: any;
  @Column('datetime', { nullable: false })
  DFxIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiEstacionModifica?: any;
  @Column('datetime', { nullable: false })
  DFxModifica?: any;
  @Column('datetime', { nullable: false })
  DFxAprueba?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioAprueba?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionAprueba?: any;
}