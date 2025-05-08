import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoRel_Auxiliar_TipoAuxiliarAudt')
export class TblNoRel_Auxiliar_TipoAuxiliarAudt {
  @Column('int', { nullable: false })
  NNuControl?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiTipoAuxiliar?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiAlterno?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeRel_Aux_TipoAux?: any;
}