import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoTipoNomina')
export class TblNoTipoNomina {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsTipoNomina?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiOrigenProceso?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnControlHoras?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnCancelaAnticipos?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtOrigenSueldo?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeTipoNomina?: string;
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
  @Column({ type: 'char', length: 1, nullable: false })
  CSnAfectaRDEP?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnTipoObrero?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnBeneficiosxPorcentaje?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtPorcentaje?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnGenerarHorasDia?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtGeneracion?: string;
  @Column('int', { nullable: false })
  NidNoConcepto?: any;
  @Column('int', { nullable: false })
  NidNoDesglose?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDesahucio?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtCalculoDesahucio?: string;
  @Column('int', { nullable: false })
  NQnTipoObrero?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnBajaD14Area?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDiasProyecto?: string;
}