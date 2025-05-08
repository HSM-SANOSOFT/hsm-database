import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblIvCabImplemento')
export class TblIvCabImplemento {
  @PrimaryColumn('int', { nullable: false })
  NIdIvImplemento?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('int', { nullable: false })
  NNuPeriodo?: any;
  @Column('int', { nullable: false })
  NidNoNovedad?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeImplemento?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFxIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFxModifica?: any;
  @Column('datetime', { nullable: false })
  DFxAprueba?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioAprueba?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionAprueba?: string;
}