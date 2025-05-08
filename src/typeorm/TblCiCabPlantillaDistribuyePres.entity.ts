import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCiCabPlantillaDistribuyePres')
export class TblCiCabPlantillaDistribuyePres {
  @Column('int', { nullable: false })
  NIdCiPlantillaDistribuye?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDivision?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSucursal?: any;
  @Column('int', { nullable: false })
  NNuControl?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column('int', { nullable: false })
  NIdPrPresupuesto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoComprobante?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDpto?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCePlantillaDistribuye?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: any;
  @Column('datetime', { nullable: false })
  DFxIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: any;
  @Column('datetime', { nullable: false })
  DFxModifica?: any;
}