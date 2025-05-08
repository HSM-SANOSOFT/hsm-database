import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCiCabPlantilla')
export class TblCiCabPlantilla {
  @PrimaryColumn('int', { nullable: false })
  NIdCiPlantilla?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivision?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursal?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoComprobante?: string;
  @Column('int', { nullable: false })
  NNuAsiento?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsObservacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtPlantilla?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtProceso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiIndividual?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCePlantilla?: string;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtAsiento?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnGenerarContxObra?: string;
}