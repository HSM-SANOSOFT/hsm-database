import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCACabConfigMarcaciones')
export class TblCACabConfigMarcaciones {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiConfigMarcacion?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtTurno?: any;
  @Column('datetime', { nullable: false })
  DFxMaxEntradaDiurna?: any;
  @Column('datetime', { nullable: false })
  DFxMinSalidaDiurna?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalculaHSuplAntesEntrada?: any;
  @Column('datetime', { nullable: false })
  DFxMaxSalidaDiurna?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnSgteDiaMaxSalida?: any;
  @Column('datetime', { nullable: false })
  DFxMaxEntradaNocturna?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalculaHSuplSalidaNocturna?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalculaHExtFinSemanaNocturna?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnHExtrasFinSemana?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: any;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
}