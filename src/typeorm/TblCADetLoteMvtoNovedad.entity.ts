import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetLoteMvtoNovedad')
export class TblCADetLoteMvtoNovedad {
  @PrimaryColumn('int', { nullable: false })
  NIdCALoteMvto?: number;
  @PrimaryColumn('int', { nullable: false })
  NIdNoNovedad?: number;
  @Column('int', { nullable: false })
  NIdNoConcepto?: number;
  @Column('int', { nullable: false })
  NIdNoDesglose?: number;

}