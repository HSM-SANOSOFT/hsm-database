import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetAnticipo')
export class TblNoDetAnticipo {
  @PrimaryColumn('int', { nullable: false })
  NIdNoAnticipo?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('int', { nullable: false })
  NIdNoConcepto?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConcepto?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: number;

}