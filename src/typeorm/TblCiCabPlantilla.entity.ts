import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCiCabPlantilla')
export class TblCiCabPlantilla {
  @PrimaryColumn('int', { nullable: false })
  NIdCiPlantilla?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoComprobante?: any;
  @Column('int', { nullable: false })
  NNuAsiento?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsObservacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtPlantilla?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiIndividual?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCePlantilla?: any;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtAsiento?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnGenerarContxObra?: any;
}