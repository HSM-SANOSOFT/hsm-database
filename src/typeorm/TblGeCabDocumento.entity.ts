import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeCabDocumento')
export class TblGeCabDocumento {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDocumento?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsDocumento?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsArchivo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtDocumento?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiReferencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeDocumento?: any;
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