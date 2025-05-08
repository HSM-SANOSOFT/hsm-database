import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetConfigMarcaciones')
export class TblCADetConfigMarcaciones {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiConfigMarcacion!: string;

  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCtJornada!: string;

  @Column('int', { nullable: false })
  NIdNoConcepto!: number;

  @Column('int', { nullable: false })
  NIdNoDesglose!: number;

  @Column('datetime', { nullable: false })
  DFxEntradaLey!: Date;

  @Column('datetime', { nullable: false })
  DFxSalidaLey!: Date;

  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuMaxHorasDias!: number;

  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuMaxHorasSemana!: number;
}
