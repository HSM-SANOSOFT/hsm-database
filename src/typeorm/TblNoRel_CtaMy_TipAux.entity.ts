import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoRel_CtaMy_TipAux')
export class TblNoRel_CtaMy_TipAux {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiPlanCta?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiCuenta?: any;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiTipoAuxiliar?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeRel_CtaMy_TipAux?: string;

}