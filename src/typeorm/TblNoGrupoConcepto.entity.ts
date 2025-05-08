import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoGrupoConcepto')
export class TblNoGrupoConcepto {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiGrupoConcepto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsGrupoConcepto?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeGrupoConcepto?: string;
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
}