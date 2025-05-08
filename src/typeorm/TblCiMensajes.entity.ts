import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblCiMensajes')
export class TblCiMensajes {
  @Column({ type: 'varchar', length: 255, nullable: false })
  CCiMensaje?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsMsjeCorto?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsMsjeLargo?: any;
}