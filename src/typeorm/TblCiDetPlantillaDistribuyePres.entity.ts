import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCiDetPlantillaDistribuyePres')
export class TblCiDetPlantillaDistribuyePres {
  @PrimaryColumn('int', { nullable: false })
  NIdCiPlantillaDistribuye?: any;
  @PrimaryColumn('int', { nullable: false })
  NNuSecuencia?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtOrigen?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDpto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiProyecto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiSubProyecto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCuenta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiTipoAuxiliar?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiAuxiliar?: any;

}