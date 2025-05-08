import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeGrupo')
export class TblGeGrupo {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiGrupo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsGrupo?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeGrupo?: any;
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