import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetAsignaBancoContrato')
export class TblNoDetAsignaBancoContrato {
  @PrimaryColumn('int', { nullable: false })
  NNuControl?: number;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: number;
  @Column('int', { nullable: false })
  NidNoContrato?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiBancoAnterior?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiBancoActual?: string;

}