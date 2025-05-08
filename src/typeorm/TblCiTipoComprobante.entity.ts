import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCiTipoComprobante')
export class TblCiTipoComprobante {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoComprobante?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsTipoComprobante?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeTipoComprobante?: string;
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