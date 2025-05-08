import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeUnidadMedida')
export class TblGeUnidadMedida {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiUnidadMedida?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsUnidadMedida?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxDescripcionCorta?: any;
  @Column('numeric', { precision: 18, scale: 2, nullable: false })
  NNuCantidadKilo?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeUnidadMedida?: any;
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
}