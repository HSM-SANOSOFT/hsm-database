import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeCias')
export class TblGeCias {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsCia?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsCiaLarga?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiGrupo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiRuc?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxRegPatronal?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSectorial?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTelefono?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxFax?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxEmail?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiProvincia?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCanton?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiParroquia?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDireccion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtIdRepresentante?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiIdRepresentante?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsRepresentante?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCargoRep?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiIdRUCContador?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsContador?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeCia?: string;
  @Column('text', { nullable: false })
  ImgCia?: string;
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
  @Column({ type: 'char', length: 1, nullable: false })
  CCtDistribucionCCosto?: string;
}