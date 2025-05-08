import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetTurnoTipoNomina')
export class TblCADetTurnoTipoNomina {
  @PrimaryColumn('int', { nullable: false })
  NIdCaTurno?: number;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiTipoNomina?: string;

}