import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoVariableConcepto')
export class TblNoVariableConcepto {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiVariable?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsVariable?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtVariable?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxCampoValor?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTabla?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxCampoCondicion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxParametroCondicion?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeVariable?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionIngreso?: any;
  @Column('datetime', { nullable: false })
  DFiIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: any;
  @Column('datetime', { nullable: false })
  DFmModifica?: any;
}