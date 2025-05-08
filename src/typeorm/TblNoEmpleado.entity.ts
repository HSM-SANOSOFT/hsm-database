import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoEmpleado')
export class TblNoEmpleado {
  @PrimaryColumn('int', { nullable: false })
  NIdNoEmpleado?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsApellidos?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsNombres?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtDocumento?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDocumento?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxLibretaMilitar?: any;
  @Column('datetime', { nullable: false })
  DFxIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiNacionalidad?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxLugarNacimiento?: any;
  @Column('datetime', { nullable: false })
  DFxNacimiento?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtEstadoCivil?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiProvincia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCanton?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiParroquia?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxSector?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDireccion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtVivienda?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxNumVivienda?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTelefono?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxCelular?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxMail?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxMailPersonal?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuEstatura?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNupeso?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuTallaCadera?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuTallaCintura?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuTallaCuello?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuTallaEspalda?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuTallaPecho?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuTallaPie?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxColorOjos?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxColorPiel?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTipoSangre?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtSexo?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsContacto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDireccionContacto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTelfContato1?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTelfContato2?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtLicenciaConducir?: any;
  @Column('datetime', { nullable: false })
  DFxLicenciaConducir?: any;
  @Column('int', { nullable: false })
  NIdNoJefeInmediato?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxNivelEducacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnCertificadoSalud?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCertificadoSalud?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxCertificadoSalud?: any;
  @Column('datetime', { nullable: false })
  DFxCertificadoSalud?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnDiscapacitado?: any;
  @Column('int', { nullable: false })
  NQnDiscapacidad?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxConadis?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDiscapacidad?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnFichaMedica?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnEmbarazada?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnMarcacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiReloj?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnMultiEmpresa?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeEmpleado?: any;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMaquinaria?: any;
}