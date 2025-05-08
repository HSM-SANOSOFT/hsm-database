import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetLoteMvtoNovedad')
export class TblCADetLoteMvtoNovedad {
  @PrimaryColumn('int', { nullable: false })
  NIdCALoteMvto?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdNoNovedad?: any;
  @Column('int', { nullable: false })
  NIdNoConcepto?: any;
  @Column('int', { nullable: false })
  NIdNoDesglose?: any;

}