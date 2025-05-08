import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCADetImportacion')
export class TblCADetImportacion {
  @PrimaryColumn('int', { nullable: false })
  NIdCAImportacion?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NIdNoContrato?: any;
  @Column('datetime', { nullable: false })
  DFxMarcacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtMarcacion?: any;

}