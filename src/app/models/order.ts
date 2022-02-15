export class Order {
    constructor(
        public number:string,
        public product:string,
        public price:string,
        public quantity:string,
        public description:string,
        public date:string,
        public selected:boolean
    ){}
}