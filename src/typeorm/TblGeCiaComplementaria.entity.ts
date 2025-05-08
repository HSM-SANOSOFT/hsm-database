import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeCiaComplementaria')
export class TblGeCiaComplementaria {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiCiaComplementaria?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsCiaComplementaria?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiRucComplementaria?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsContacto?: string;
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
  CCeCiaComplementaria?: string;
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