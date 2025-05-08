import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeCiaComplementaria')
export class TblGeCiaComplementaria {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiCiaComplementaria?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsCiaComplementaria?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiRucComplementaria?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsContacto?: any;
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
  CCeCiaComplementaria?: any;
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