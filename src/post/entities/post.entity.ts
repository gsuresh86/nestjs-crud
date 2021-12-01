import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Post {

    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

}
