import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetConfigMarcaciones')
export class TblCADetConfigMarcaciones {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiConfigMarcacion?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCtJornada?: any;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoDesglose?: any;
  @Column('datetime', { nullable: false })
  DFxEntradaLey?: any;
  @Column('datetime', { nullable: false })
  DFxSalidaLey?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuMaxHorasDias?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuMaxHorasSemana?: any;
}