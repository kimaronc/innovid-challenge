export class StatusDto {

    constructor(id: string, load: number) {
        this.id = id
        this.load = load
    }

    id: string
    load: number
}