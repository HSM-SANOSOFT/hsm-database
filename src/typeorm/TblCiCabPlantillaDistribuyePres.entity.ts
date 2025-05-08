import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCiCabPlantillaDistribuyePres')
export class TblCiCabPlantillaDistribuyePres {
  @Column('int', { nullable: false })
  NIdCiPlantillaDistribuye?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCia?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSucursal?: string;
  @Column('int', { nullable: false })
  NNuControl?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column('int', { nullable: false })
  NIdPrPresupuesto?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoComprobante?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDpto?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCePlantillaDistribuye?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFxIngreso?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFxModifica?: Date;
}