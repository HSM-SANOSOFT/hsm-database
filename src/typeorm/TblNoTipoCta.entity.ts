import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TblNoTipoCta')
export class TblNoTipoCta {
  @PrimaryColumn({ type: 'char', length: 1, nullable: false })
  CCiTipoCta?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  CDsTipoCta?: any;
  @Column({ type: 'char', length: 1, nullable: false })
  BSnEncera?: any;
  @Column({ type: 'varchar', length: 255, nullable: false })
  CDsCorto?: any;
}