import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoAspirante')
export class TblNoAspirante {
  @PrimaryColumn('int', { nullable: false })
  NIdNoAspirante?: number;
  @Column('int', { nullable: false })
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
  CTxLibretaIESS?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxLibretaMilitar?: string;
  @Column('datetime', { nullable: false })
  DFxSolicitud?: Date;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiCargo?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NVtSueldo?: number;
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
  CSnDiscapacitado?: string;
  @Column('int', { nullable: false })
  NQnDiscapacidad?: number;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxConadis?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeAspirante?: string;
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
  @Column('datetime', { nullable: false })
  DFxRegistro?: Date;
}