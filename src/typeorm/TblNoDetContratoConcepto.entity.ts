import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetContratoConcepto')
export class TblNoDetContratoConcepto {
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoConcepto?: number;
  @Column('int', { nullable: false })
  NIdNoDesglose?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConcepto?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnPorcentaje?: number;

}