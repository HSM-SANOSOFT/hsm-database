import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeMaquinaria')
export class TblGeMaquinaria {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiMaquinaria?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsMaquinaria?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeMaquinaria?: any;
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