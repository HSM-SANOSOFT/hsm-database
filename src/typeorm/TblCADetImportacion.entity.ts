import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetImportacion')
export class TblCADetImportacion {
  @PrimaryColumn('int', { nullable: false })
  NIdCAImportacion?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NIdNoContrato?: number;
  @Column('datetime', { nullable: false })
  DFxMarcacion?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtMarcacion?: string;

}