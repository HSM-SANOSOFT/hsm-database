import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoEmpleado')
export class TblNoEmpleado {
  @PrimaryColumn('int', { nullable: false })
  NIdNoEmpleado?: number;
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
  DFxIngreso?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiNacionalidad?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxLugarNacimiento?: string;
  @Column('datetime', { nullable: false })
  DFxNacimiento?: Date;
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
  NNuEstatura?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNupeso?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuTallaCadera?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuTallaCintura?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuTallaCuello?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuTallaEspalda?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuTallaPecho?: number;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuTallaPie?: number;
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
  DFxLicenciaConducir?: Date;
  @Column('int', { nullable: false })
  NIdNoJefeInmediato?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxNivelEducacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnCertificadoSalud?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCertificadoSalud?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxCertificadoSalud?: string;
  @Column('datetime', { nullable: false })
  DFxCertificadoSalud?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CSnDiscapacitado?: string;
  @Column('int', { nullable: false })
  NQnDiscapacidad?: number;
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
  DFiIngreso?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiUsuarioModifica?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsEstacionModifica?: string;
  @Column('datetime', { nullable: false })
  DFmModifica?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMaquinaria?: string;
}