import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCiTipoComprobante')
export class TblCiTipoComprobante {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoComprobante?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsTipoComprobante?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeTipoComprobante?: any;
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