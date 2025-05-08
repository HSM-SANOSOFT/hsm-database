import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetConcepto')
export class TblNoDetConcepto {
  @PrimaryColumn('int', { nullable: false })
  NIdNoConcepto?: number;
  @PrimaryColumn('int', { nullable: false })
  NIdNoDesglose?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDetConcepto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsDetConcepto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUnidadMedida?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtConcepto?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeDetConcepto?: string;
  @Column('int', { nullable: false })
  NNuPrioridadDesglose?: number;

}