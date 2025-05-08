import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblIvCabImplemento')
export class TblIvCabImplemento {
  @PrimaryColumn('int', { nullable: false })
  NIdIvImplemento?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;
  @Column('int', { nullable: false })
  NNuAnio?: number;
  @Column('int', { nullable: false })
  NNuPeriodo?: number;
  @Column('int', { nullable: false })
  NidNoNovedad?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeImplemento?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFxIngreso?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFxModifica?: Date;
  @Column('datetime', { nullable: false })
  DFxAprueba?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioAprueba?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionAprueba?: string;
}