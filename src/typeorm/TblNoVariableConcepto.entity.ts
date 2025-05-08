import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoVariableConcepto')
export class TblNoVariableConcepto {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiVariable?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsVariable?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtVariable?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxCampoValor?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTabla?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxCampoCondicion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxParametroCondicion?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeVariable?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: string;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
}