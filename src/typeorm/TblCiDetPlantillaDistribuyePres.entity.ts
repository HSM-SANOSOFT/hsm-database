import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCiDetPlantillaDistribuyePres')
export class TblCiDetPlantillaDistribuyePres {
  @PrimaryColumn('int', { nullable: false })
  NIdCiPlantillaDistribuye?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtOrigen?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDpto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiProyecto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubProyecto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCuenta?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoAuxiliar?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiAuxiliar?: string;

}