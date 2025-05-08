import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoRelaTransfMvtoBancario')
export class TblNoRelaTransfMvtoBancario {
  @PrimaryColumn('int', { nullable: false })
  NIdNoTransferencia?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDpto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiProyecto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubProyecto?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCiaMvtoBco?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivisionMvtoBco?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursalMvtoBco?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoMvtoBco?: string;
  @Column('int', { nullable: false })
  NNuSecuenciaMvtoBco?: any;
  @Column('int', { nullable: false })
  NNuAnioMvtoBco?: any;

}