import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoRel_Auxiliar_TipoAuxiliarAudt')
export class TblNoRel_Auxiliar_TipoAuxiliarAudt {
  @Column('int', { nullable: false })
  NNuControl?: number;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiTipoAuxiliar?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiAlterno?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeRel_Aux_TipoAux?: string;
}