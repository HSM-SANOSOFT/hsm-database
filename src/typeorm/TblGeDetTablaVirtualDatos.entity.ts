import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetTablaVirtualDatos')
export class TblGeDetTablaVirtualDatos {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiTablaVirtual?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiCampoVirtual?: string;
  @PrimaryColumn('int', { nullable: false })
  NIdGeReferencia?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsValorDato?: string;
}