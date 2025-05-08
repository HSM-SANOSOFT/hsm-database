import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetAsignaBancoContrato')
export class TblNoDetAsignaBancoContrato {
  @PrimaryColumn('int', { nullable: false })
  NNuControl?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column('int', { nullable: false })
  NidNoContrato?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiBancoAnterior?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiBancoActual?: any;

}