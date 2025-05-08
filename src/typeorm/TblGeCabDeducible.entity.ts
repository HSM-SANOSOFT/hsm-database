import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeCabDeducible')
export class TblGeCabDeducible {
  @Column('int', { nullable: false })
  NIdGeDeducible?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsGeDeducible?: string;
  @Column('int', { nullable: false })
  NNuAnio?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtTotalDedudible?: any;
  @Column('datetime', { nullable: false })
  DFxProyeccion1?: any;
  @Column('datetime', { nullable: false })
  DFxProyeccion2?: any;
  @Column('datetime', { nullable: false })
  DFxProyeccion3?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeGeDeducible?: string;
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