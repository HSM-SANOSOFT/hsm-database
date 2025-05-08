import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoTipoNomina')
export class TblNoTipoNomina {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsTipoNomina?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiOrigenProceso?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnControlHoras?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnCancelaAnticipos?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtOrigenSueldo?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeTipoNomina?: any;
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
  @Column({ type: 'char', length: 1, nullable: false })
  CSnAfectaRDEP?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnTipoObrero?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnBeneficiosxPorcentaje?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtPorcentaje?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnGenerarHorasDia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtGeneracion?: any;
  @Column('int', { nullable: false })
  NidNoConcepto?: any;
  @Column('int', { nullable: false })
  NidNoDesglose?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDesahucio?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtCalculoDesahucio?: any;
  @Column('int', { nullable: false })
  NQnTipoObrero?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnBajaD14Area?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnDiasProyecto?: any;
}