const products = [];

module.exports = class Product{
    constructor(t,p,c,s,i,m){
        this.title = t,
        this.pay = p,
        this.color = c,
        this.size = s,
        this.image = i,
        this.message = m
    }
    save(){
        products.push(this);
    }
    static fetchAll(){
        return products;
    }
}