import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoAspirante')
export class TblNoAspirante {
  @PrimaryColumn('int', { nullable: false })
  NIdNoAspirante?: any;
  @Column('int', { nullable: false })
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
  CTxLibretaIESS?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxLibretaMilitar?: any;
  @Column('datetime', { nullable: false })
  DFxSolicitud?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCargo?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: any;
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
  CSnDiscapacitado?: any;
  @Column('int', { nullable: false })
  NQnDiscapacidad?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxConadis?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeAspirante?: any;
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
  @Column('datetime', { nullable: false })
  DFxRegistro?: any;
}