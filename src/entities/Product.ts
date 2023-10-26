import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity('product', { schema: "db" })
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { name: "name", nullable: true, length: 100, })
    name: string

    @Column("varchar", { name: "description", nullable: true, length: 100 })
    description: string

    @Column('varchar', { name: "isPublished", nullable: true, length: 100 })
    isPublished: boolean
}