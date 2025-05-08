import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCiCabPlantillaEmpl')
export class TblCiCabPlantillaEmpl {
  @PrimaryColumn('int', { nullable: false })
  NIdCiPlantillaEmpl?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @Column('int', { nullable: false })
  NNuAsientoEmpl?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsObservacion?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCePlantillaEmpl?: any;
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