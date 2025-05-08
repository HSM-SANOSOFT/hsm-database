import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeDetTablaVirtualDatos')
export class TblGeDetTablaVirtualDatos {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiTablaVirtual?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiCampoVirtual?: any;
  @PrimaryColumn('int', { nullable: false })
  NIdGeReferencia?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsValorDato?: string;
}