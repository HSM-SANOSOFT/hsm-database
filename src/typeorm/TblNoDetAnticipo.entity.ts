import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetAnticipo')
export class TblNoDetAnticipo {
  @PrimaryColumn('int', { nullable: false })
  NIdNoAnticipo?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConcepto?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: any;

}