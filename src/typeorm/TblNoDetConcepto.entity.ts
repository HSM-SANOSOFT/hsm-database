import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetConcepto')
export class TblNoDetConcepto {
  @PrimaryColumn('int', { nullable: false })
  NIdNoConcepto?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdNoDesglose?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDetConcepto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsDetConcepto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUnidadMedida?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConcepto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeDetConcepto?: any;
  @Column('int', { nullable: false })
  NNuPrioridadDesglose?: any;

}