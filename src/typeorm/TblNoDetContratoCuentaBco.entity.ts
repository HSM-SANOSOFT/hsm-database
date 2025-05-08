import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoDetContratoCuentaBco')
export class TblNoDetContratoCuentaBco {
  @PrimaryColumn('int', { nullable: false })
  NIdNoContrato?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtCuenta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiBanco?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxCuenta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeCuenta?: any;

}