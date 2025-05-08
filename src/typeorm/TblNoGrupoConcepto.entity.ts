import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoGrupoConcepto')
export class TblNoGrupoConcepto {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiGrupoConcepto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsGrupoConcepto?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeGrupoConcepto?: any;
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