import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('GeDBName')
export class GeDBName {
  @PrimaryColumn({ type: 'varchar', length: 10 })
  CCiAplicacion!: string;

  @Column({ type: 'varchar', length: 30 })
  CDsDBName!: string;
}
