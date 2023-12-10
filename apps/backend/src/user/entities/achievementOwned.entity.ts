import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, JoinTable, CreateDateColumn } from "typeorm"
import { Achievement } from "./achievement.entity"
import { User } from "./user.entity"

@Entity()
export class AchievementOwned {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Achievement, {})
    @JoinTable()
    achievement: Achievement

    @ManyToOne(() => User, (user) => user.achievements, {})
    @JoinTable()
    user: User

    @CreateDateColumn(
        {
            nullable: true,
        }
    )
    dateOwned: string

}
