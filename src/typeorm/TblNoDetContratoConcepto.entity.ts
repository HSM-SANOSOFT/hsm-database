import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetContratoConcepto')
export class TblNoDetContratoConcepto {
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoDesglose?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConcepto?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NQnPorcentaje?: any;

}