import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoRelaTransfMvtoBancario')
export class TblNoRelaTransfMvtoBancario {
  @PrimaryColumn('int', { nullable: false })
  NIdNoTransferencia?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDpto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiProyecto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubProyecto?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCiaMvtoBco?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiDivisionMvtoBco?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiSucursalMvtoBco?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoMvtoBco?: any;
  @Column('int', { nullable: false })
  NNuSecuenciaMvtoBco?: any;
  @Column('int', { nullable: false })
  NNuAnioMvtoBco?: any;

}