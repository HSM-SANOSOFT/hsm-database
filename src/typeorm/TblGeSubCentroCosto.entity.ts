import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeSubCentroCosto')
export class TblGeSubCentroCosto {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: string;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsSubCentroCosto?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeSubCentroCosto?: string;
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
}