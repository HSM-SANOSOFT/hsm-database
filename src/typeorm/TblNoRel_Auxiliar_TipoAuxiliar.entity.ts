import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoRel_Auxiliar_TipoAuxiliar')
export class TblNoRel_Auxiliar_TipoAuxiliar {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiTipoAuxiliar?: string;
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiAuxiliar?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiAlterno?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeRel_Aux_TipoAux?: string;

}