import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeSubCentroCosto')
export class TblGeSubCentroCosto {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiCentroCosto?: any;
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiSubCentroCosto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsSubCentroCosto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCeSubCentroCosto?: any;
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