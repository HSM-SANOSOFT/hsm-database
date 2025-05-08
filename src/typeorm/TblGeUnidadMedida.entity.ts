import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeUnidadMedida')
export class TblGeUnidadMedida {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiUnidadMedida?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsUnidadMedida?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDescripcionCorta?: string;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuCantidadKilo?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeUnidadMedida?: string;
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
}