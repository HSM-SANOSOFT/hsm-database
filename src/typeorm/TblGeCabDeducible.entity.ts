import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeCabDeducible')
export class TblGeCabDeducible {
  @Column('int', { nullable: false })
  NIdGeDeducible?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsGeDeducible?: any;
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
  CCeGeDeducible?: any;
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