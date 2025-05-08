import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeCias')
export class TblGeCias {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsCia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsCiaLarga?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiGrupo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiRuc?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxRegPatronal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSectorial?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTelefono?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxFax?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxEmail?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiProvincia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCanton?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiParroquia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDireccion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtIdRepresentante?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiIdRepresentante?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsRepresentante?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCargoRep?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiIdRUCContador?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsContador?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeCia?: any;
  @Column('text', { nullable: false })
  ImgCia?: any;
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
  @Column({ type: 'char', length: 1, nullable: false })
  CCtDistribucionCCosto?: any;
}