import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoOrigenConcepto')
export class TblNoOrigenConcepto {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiOrigen?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiDetOrigen?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsOrigen?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsDetOrigen?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnUnico?: string;

}