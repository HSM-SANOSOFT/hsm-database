import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoCuenta')
export class TblNoCuenta {
  @Column({ type: 'char', length: 1, nullable: false })
  CCiPlanCta?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiCuenta?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiTipoCta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CdsCuentaEditada?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsCuenta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxAlias?: any;
  @Column('text', { nullable: false })
  BSnAceptaAux?: any;
  @Column('text', { nullable: false })
  BSnTercerImporte?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtTituloDetalle?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxReservadoUsuario?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioIngr?: any;
  @Column('datetime', { nullable: false })
  DFiCreacion?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCiUsuarioModi?: any;
  @Column('datetime', { nullable: false })
  DFuModificacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioInac?: any;
  @Column('datetime', { nullable: false })
  DFuInactiva?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuNivelCta?: any;
  @Column('text', { nullable: false })
  BsnAceptaDoc?: any;
  @Column('text', { nullable: false })
  BsnAceptaVenc?: any;
  @Column('text', { nullable: false })
  BsnAceptaDpto?: any;
  @Column('text', { nullable: false })
  BsnAceptaProyecto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiAlterno?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCtAcreedoraDeudora?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSNFijaVariable?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CciTipoUso?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnUsoModulo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiGrupoAlternoCta?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CNoAlterno?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeCuenta?: any;
}