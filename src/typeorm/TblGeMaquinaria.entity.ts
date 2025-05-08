import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblGeMaquinaria')
export class TblGeMaquinaria {
  @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
  CCiMaquinaria?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsMaquinaria?: string;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CTxObservacion?: string;
  @Column({ type: 'char', length: 1, nullable: false })
  CCeMaquinaria?: string;
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