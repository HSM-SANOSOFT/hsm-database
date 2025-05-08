import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoRelTipoNominaConcepto')
export class TblNoRelTipoNominaConcepto {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdNoConcepto?: any;

}