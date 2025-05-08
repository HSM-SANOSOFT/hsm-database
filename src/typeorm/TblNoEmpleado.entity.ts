import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoEmpleado')
export class TblNoEmpleado {
  @PrimaryColumn('int', { nullable: false })
  NIdNoEmpleado?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsApellidos?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsNombres?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtDocumento?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiDocumento?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxLibretaMilitar?: string;
  @Column('datetime', { nullable: false })
  DFxIngreso?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiNacionalidad?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxLugarNacimiento?: string;
  @Column('datetime', { nullable: false })
  DFxNacimiento?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtEstadoCivil?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiProvincia?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCanton?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiParroquia?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxSector?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDireccion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtVivienda?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxNumVivienda?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTelefono?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxCelular?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxMail?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxMailPersonal?: string;
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
  CTxColorOjos?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxColorPiel?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTipoSangre?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtSexo?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsContacto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDireccionContacto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTelfContato1?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxTelfContato2?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCtLicenciaConducir?: string;
  @Column('datetime', { nullable: false })
  DFxLicenciaConducir?: any;
  @Column('int', { nullable: false })
  NIdNoJefeInmediato?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxNivelEducacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnCertificadoSalud?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCertificadoSalud?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxCertificadoSalud?: string;
  @Column('datetime', { nullable: false })
  DFxCertificadoSalud?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnDiscapacitado?: string;
  @Column('int', { nullable: false })
  NQnDiscapacidad?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxConadis?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDiscapacidad?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnFichaMedica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnEmbarazada?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnMarcacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiReloj?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CSnMultiEmpresa?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeEmpleado?: string;
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
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMaquinaria?: string;
}