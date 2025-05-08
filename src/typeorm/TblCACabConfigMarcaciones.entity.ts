import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCACabConfigMarcaciones')
export class TblCACabConfigMarcaciones {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiConfigMarcacion!: string;

  @Column({ type: 'char', length: 1, nullable: false })
  CCtTurno!: string;

  @Column('datetime', { nullable: false })
  DFxMaxEntradaDiurna!: Date;

  @Column('datetime', { nullable: false })
  DFxMinSalidaDiurna!: Date;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalculaHSuplAntesEntrada!: string;

  @Column('datetime', { nullable: false })
  DFxMaxSalidaDiurna!: Date;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnSgteDiaMaxSalida!: string;

  @Column('datetime', { nullable: false })
  DFxMaxEntradaNocturna!: Date;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalculaHSuplSalidaNocturna!: string;

  @Column({ type: 'char', length: 1, nullable: false })
  CSnCalculaHExtFinSemanaNocturna!: string;
  
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnHExtrasFinSemana!: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica!: string;
  
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica!: string;
  
  @Column('datetime', { nullable: false })
  DFmModifica!: Date;
}
